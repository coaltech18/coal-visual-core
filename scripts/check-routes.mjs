import assert from 'node:assert/strict';
const base = process.env.COALTECH_PREVIEW_URL || 'http://localhost:3100';
const sitemap = await (await fetch(base + '/sitemap.xml')).text();
const routes = [...sitemap.matchAll(/<loc>https:\/\/coaltech\.in([^<]*)<\/loc>/g)].map(match => match[1] || '/');
assert.equal(routes.length, 13);
const titles = new Set();
const links = new Set();
for (const path of routes) {
  const response = await fetch(base + path); assert.equal(response.status, 200, path);
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title?.includes('Coaltech'), 'Brand in title: ' + path); assert.ok(!titles.has(title), 'Unique title: ' + path); titles.add(title);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, 'One H1: ' + path);
  assert.ok(html.includes('rel="canonical" href="https://coaltech.in' + (path === '/' ? '"' : path + '"')), 'Canonical: ' + path);
  assert.ok(html.includes('name="description"'), 'Description: ' + path);
  assert.ok(html.includes('property="og:url"'), 'Social URL: ' + path);
  for (const match of html.matchAll(/href="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) if (!match[1].startsWith('/_next/')) links.add(match[1]);
}
for (const path of links) assert.equal((await fetch(base + path)).status, 200, 'Internal link: ' + path);
assert.equal((await fetch(base + '/work/does-not-exist')).status, 404);
const robots = await (await fetch(base + '/robots.txt')).text(); assert.ok(robots.includes('https://coaltech.in/sitemap.xml'));
console.log(`${routes.length} routes passed: titles, descriptions, canonicals, OG URLs, one H1; ${links.size} internal targets passed; unknown project returns 404; robots points to .in sitemap.`);
