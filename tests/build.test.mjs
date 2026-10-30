import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
const html = await readFile(
  new URL('../dist/index.html', import.meta.url),
  'utf8',
);
test('static page includes essential accessibility and SEO markup', () => {
  for (const text of [
    'lang="en"',
    'name="description"',
    'Skip to content',
    'id="main"',
    'id="products"',
    'id="contact"',
  ])
    assert.ok(html.includes(text), text);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1);
});
test('prelaunch status and contact route are explicit', () => {
  assert.ok(html.includes('No products available yet.'));
  assert.ok(html.includes('https://github.com/meletiq/meletiq-website/issues'));
  assert.ok(!html.includes('brylle.logrono@gmail.com'));
});
