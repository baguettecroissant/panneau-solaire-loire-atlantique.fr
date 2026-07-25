import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');

test('homepage includes photographic hero, calculators, guides and trust sections', () => {
  const home = read('src/pages/index.astro');
  for (const marker of ['hero-panneau-solaire-loire-atlantique.webp', 'SolarCalculator', 'guide-grid', 'trust-strip', 'Nantes Capitale Verte']) {
    assert.ok(home.includes(marker), `homepage missing ${marker}`);
  }
});

test('local page component exposes five local blocks and four interactive modules', () => {
  const local = read('src/components/LocalPage.astro');
  for (const marker of ['local-intro', 'local-advice', 'local-heritage', 'local-market', 'local-faq', 'SolarCalculator', 'ROI', 'PAC + solaire', 'Carte solaire du 44']) {
    assert.ok(local.includes(marker), `local page missing ${marker}`);
  }
});

test('lead form is multi-step and posts JSON to the secure endpoint', () => {
  const form = read('src/components/LeadForm.astro');
  for (const marker of ['data-step="1"', 'data-step="2"', 'data-step="3"', "fetch('/api/lead'", 'submissionId', 'progress-bar']) {
    assert.ok(form.includes(marker), `lead form missing ${marker}`);
  }
});

test('eight distinct guide images exist and guide dataset is editorially rich', () => {
  const guideImages = ['prix-solaire-44.webp','solaire-nantes.webp','autoconsommation.webp','aides-transition.webp','pac-solaire.webp','toiture-ardoise.webp','batterie-solaire.webp','installateur-rge.webp'];
  for (const image of guideImages) assert.ok(existsSync(new URL(`public/images/guides/${image}`, root)), `missing ${image}`);
  const guides = read('src/data/guides.ts');
  assert.equal((guides.match(/^  slug:/gm) || []).length, 8);
  assert.ok(guides.length > 30000, 'guide dataset is still too thin');
});
