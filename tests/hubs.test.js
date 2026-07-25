import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');

test('communes hub has a searchable, structured directory instead of a plain city list', () => {
  const page = read('src/pages/communes.astro');
  for (const marker of ['communes-hero', 'city-search', 'featured-cities', 'communes-directory', 'data-city-card', 'communes.length']) {
    assert.ok(page.includes(marker), `communes hub missing ${marker}`);
  }
});

test('tarifs page explains price composition, scenarios and supplies a conversion path', () => {
  const page = read('src/pages/tarifs.astro');
  for (const marker of ['tarifs-hero', 'price-comparison', 'budget-factors', 'Scénario maison nantaise', 'LeadForm', 'prix-solaire-44.webp']) {
    assert.ok(page.includes(marker), `tarifs page missing ${marker}`);
  }
});
