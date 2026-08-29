/**
 * The whole site validates against the schema it is rendered with — the same
 * contract substrata runs. For Camille this is also the regression net for
 * the exact defect the hand-rolled version shipped: links pointing nowhere.
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';

import { validateSite, siteNavItems } from 'sitekit';
import { siteChrome, sitePages } from '../src/config/site-content';

test('the whole site validates against the sitekit schema', () => {
  const result = validateSite({ chrome: siteChrome(), pages: sitePages() });
  assert.equal(
    result.success,
    true,
    result.success ? undefined : `schema violations:\n${result.errors.join('\n')}`,
  );
});

test('every nav item resolves to a page that exists', () => {
  const pages = sitePages();
  const paths = new Set(pages.map((p) => p.path));
  for (const item of siteNavItems(pages)) {
    assert.ok(paths.has(item.path), `nav points at missing page '${item.path}'`);
  }
});

test('every non-fragment hero action resolves to a page that exists', () => {
  const pages = sitePages();
  const paths = new Set(pages.map((p) => (p.path ? `/${p.path}` : '/')));
  for (const page of pages) {
    for (const section of page.sections) {
      if (section.kind !== 'hero' || !section.actions) continue;
      for (const action of section.actions) {
        if (action.href.startsWith('#')) continue; // fragments are schema-checked
        assert.ok(
          paths.has(action.href),
          `hero action '${action.label}' points at '${action.href}', which is not a page`,
        );
      }
    }
  }
});

test('the demo never leaks into a claimable identity', () => {
  const chrome = siteChrome();
  assert.match(chrome.footerNote, /[Ff]iktiv/);
  assert.equal(chrome.host, 'camille.orangecat.ch');
});
