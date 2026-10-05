// Exercise the actual motion effect with DOM, preference and React hook doubles.
// This runs locally without a browser, network requests or added dependencies.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

const source = ts.transpileModule(fs.readFileSync('src/components/MotionExperience.tsx', 'utf8'), {
  compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

function element(dataset = {}, parts = []) {
  return {
    dataset,
    style: { opacity: '1', visibility: 'visible', display: 'block', transform: 'none' },
    animations: [],
    querySelectorAll: () => parts,
    animate(keyframes, options) {
      const animation = {
        keyframes, options, cancelled: false, finished: false,
        cancel() { this.cancelled = true; },
        finish() { this.finished = true; this.onfinish?.(); },
      };
      this.animations.push(animation);
      return animation;
    },
  };
}

function fixture({ reduced = false, commit = true, observerSupported = true } = {}) {
  const root = { dataset: {} };
  const heroes = [element({ heroEnter: 'type' }), element({ heroEnter: 'sheet' })];
  const parts = Array.from({ length: 4 }, () => element());
  const scenes = [element(), element({}, parts)];
  const elements = [...heroes, ...scenes, ...parts];
  const styles = elements.map(node => ({ ...node.style }));
  const listeners = new Set();
  const preference = {
    matches: reduced,
    addEventListener(type, callback) { assert.equal(type, 'change'); listeners.add(callback); },
    removeEventListener(type, callback) { assert.equal(type, 'change'); listeners.delete(callback); },
  };
  const observers = [];
  class Observer {
    constructor(callback) { this.callback = callback; this.targets = []; this.disconnected = false; observers.push(this); }
    observe(target) { this.targets.push(target); }
    disconnect() { this.disconnected = true; }
    enter(target, isIntersecting = true) { this.callback([{ target, isIntersecting }]); }
  }
  let paused = false;
  let pendingEffect;
  let cleanup;
  let dependencies;
  const context = {
    exports: {},
    window: { matchMedia: () => preference, ...(observerSupported ? { IntersectionObserver: Observer } : {}) },
    document: {
      documentElement: root,
      querySelectorAll: selector => selector === '[data-hero-enter]' ? heroes : scenes,
    },
    IntersectionObserver: Observer,
    getComputedStyle: node => ({ transform: node === heroes[1] ? 'matrix(1, 0, 0, 1, 0, 0)' : 'none' }),
    require(name) {
      if (name === 'react') return {
        useState: () => [paused, value => { paused = typeof value === 'function' ? value(paused) : value; }],
        useEffect(callback, nextDependencies) {
          if (!dependencies || nextDependencies.some((value, index) => value !== dependencies[index])) {
            pendingEffect = callback;
            dependencies = Array.from(nextDependencies);
          }
        },
      };
      if (name === 'next/navigation') return { usePathname: () => '/' };
      if (name === 'react/jsx-runtime') return { jsx: (type, props) => ({ type, props }), jsxs: (type, props) => ({ type, props }) };
      throw new Error('Unexpected dependency: ' + name);
    },
  };
  vm.runInNewContext(source, context);
  const result = {
    root, heroes, scenes, parts, observers, listeners,
    render(runEffect = true) {
      this.button = context.exports.default();
      if (runEffect && pendingEffect) {
        cleanup?.();
        const effect = pendingEffect;
        pendingEffect = undefined;
        cleanup = effect();
      }
      return this.button;
    },
    changePreference(matches) {
      preference.matches = matches;
      [...listeners].forEach(callback => callback({ matches }));
    },
    assertContentVisible() {
      elements.forEach((node, index) => assert.deepEqual(node.style, styles[index]));
    },
    get animations() { return elements.flatMap(node => node.animations); },
    dispose() { cleanup?.(); },
  };
  result.render(commit);
  return result;
}

const withoutEffects = fixture({ commit: false });
withoutEffects.assertContentVisible();
assert.equal(withoutEffects.animations.length, 0);
assert.equal(withoutEffects.observers.length, 0);
assert.equal(withoutEffects.root.dataset.motion, undefined);

const manual = fixture({ commit: false });
manual.button.props.onClick();
manual.render();
assert.equal(manual.root.dataset.motion, 'paused');
assert.equal(manual.button.props['aria-pressed'], true);
assert.equal(manual.animations.length, 0);
assert.equal(manual.observers.length, 0);
manual.assertContentVisible();
manual.dispose();
assert.equal(manual.listeners.size, 0);

const reduced = fixture({ reduced: true });
assert.equal(reduced.root.dataset.motion, 'paused');
assert.equal(reduced.observers.length, 0);
assert.equal(reduced.animations.length, 0);
reduced.assertContentVisible();
reduced.changePreference(false);
assert.equal(reduced.root.dataset.motion, 'running');
assert.equal(reduced.observers.length, 1);
assert.equal(reduced.animations.length, 2);
const initialHeroAnimations = [...reduced.animations];
reduced.changePreference(true);
assert.equal(reduced.root.dataset.motion, 'paused');
assert.equal(reduced.observers[0].disconnected, true);
assert.ok(initialHeroAnimations.every(animation => animation.cancelled));
reduced.changePreference(false);
assert.equal(reduced.observers.length, 2);
assert.equal(reduced.animations.length, 2, 'Hero entrance must not replay after preference changes.');
reduced.observers[1].enter(reduced.scenes[0]);
const activeSceneAnimation = reduced.scenes[0].animations[0];
reduced.dispose();
assert.equal(reduced.observers[1].disconnected, true);
assert.equal(activeSceneAnimation.cancelled, true);
assert.equal(reduced.listeners.size, 0);
reduced.assertContentVisible();

const normal = fixture();
assert.equal(normal.root.dataset.motion, 'running');
assert.equal(normal.animations.length, 2);
assert.equal(normal.observers[0].targets.length, 2);
const observer = normal.observers[0];
observer.enter(normal.scenes[0], false);
assert.equal(normal.scenes[0].animations.length, 0);
observer.enter(normal.scenes[0]);
observer.enter(normal.scenes[0]);
observer.enter(normal.scenes[0], false);
observer.enter(normal.scenes[0]);
assert.equal(normal.scenes[0].animations.length, 1, 'A scene entrance must play once.');
assert.equal(normal.scenes[0].dataset.inView, 'true');
observer.enter(normal.scenes[1]);
assert.ok(normal.parts.every(part => part.animations.length === 1));
const completedAnimation = normal.parts[0].animations[0];
completedAnimation.finish();
const pendingAnimations = normal.animations.filter(animation => !animation.finished);
normal.button.props.onClick();
normal.render();
assert.equal(normal.root.dataset.motion, 'paused');
assert.equal(observer.disconnected, true);
assert.ok(pendingAnimations.every(animation => animation.cancelled));
assert.equal(completedAnimation.cancelled, false, 'Finished animations should be released from effect tracking.');
normal.button.props.onClick();
normal.render();
assert.equal(normal.root.dataset.motion, 'running');
normal.observers[1].enter(normal.scenes[0]);
normal.observers[1].enter(normal.scenes[1]);
assert.equal(normal.scenes[0].animations.length, 1);
assert.ok(normal.parts.every(part => part.animations.length === 1));
assert.equal(normal.heroes[0].animations.length, 1);
normal.assertContentVisible();
normal.dispose();
assert.equal(normal.observers[1].disconnected, true);
assert.equal(normal.listeners.size, 0);

const unsupported = fixture({ observerSupported: false });
assert.equal(unsupported.observers.length, 0);
assert.equal(unsupported.animations.length, 0);
unsupported.assertContentVisible();
unsupported.dispose();

console.log('Motion: reduced/manual pause, preference changes, cancellation, cleanup, one-time entrances and visible fallback passed. No browser or network used.');
