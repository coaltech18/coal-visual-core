// Exercise the actual submit handler with mocked React hooks and transport.
// No network requests are made.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const source = ts.transpileModule(fs.readFileSync('src/components/ContactForm.tsx', 'utf8'), { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
function fixture(transport) {
  const states = [];
  let resets = 0;
  const context = { exports: {}, AbortSignal, String, JSON, Error, fetch: transport, FormData: class { get(key) { return { name: ' Test Person ', email: ' test@example.com ', message: ' Website enquiry ' }[key]; } }, require: name => name === 'react' ? { useState: () => ['idle', state => states.push(state)], useRef: value => ({ current: value }) } : { jsx: (type, props) => ({ type, props }), jsxs: (type, props) => ({ type, props }) } };
  vm.runInNewContext(source, context);
  const form = context.exports.default();
  return { states, submit: () => form.props.onSubmit({ preventDefault() {}, currentTarget: { reset() { resets++; } } }), get resets() { return resets; } };
}
(async () => {
  let request;
  const success = fixture(async (url, options) => { request = { url, options }; return { ok: true, json: async () => ({ ok: true }) }; });
  await success.submit();
  assert.deepEqual(success.states, ['sending', 'sent']); assert.equal(success.resets, 1);
  assert.equal(request.url, 'https://coaltech.in/contact.php');
  assert.deepEqual(JSON.parse(request.options.body), { name: 'Test Person', email: 'test@example.com', message: 'Website enquiry' });
  for (const transport of [async () => ({ ok: false, json: async () => ({ ok: false }) }), async () => ({ ok: true, json: async () => ({ ok: false }) }), async () => ({ ok: true, json: async () => { throw new Error('invalid JSON'); } }), async () => { throw new Error('network or timeout'); }]) {
    const failure = fixture(transport); await failure.submit(); assert.deepEqual(failure.states, ['sending', 'error']); assert.equal(failure.resets, 0);
  }
  let resolve; let calls = 0;
  const concurrent = fixture(() => { calls++; return new Promise(done => { resolve = done; }); });
  const first = concurrent.submit(); await concurrent.submit(); assert.equal(calls, 1);
  resolve({ ok: true, json: async () => ({ ok: true }) }); await first;
  console.log('Contact form: success, payload, HTTP/JSON/network failures and duplicate-submit checks passed. No email sent.');
})().catch(error => { console.error(error); process.exitCode = 1; });
