import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { validateCreativeHandoff as validate } from '../skills/marketing-creative/scripts/validate-creative-handoff.mjs';
const base = { consumer: 'Ads', operation: 'variant', source_ref: 'approved-brief/version-1' };
for (const consumer of ['Marketing', 'Ads']) test(`${consumer} creative handoff`, () => assert.equal(validate({ ...base, consumer }).result, 'PASS'));
for (const operation of ['publish', 'send', 'campaign.create', 'budget.set']) test(`reject ${operation}`, () => assert.equal(validate({ ...base, operation }).result, 'FAIL'));
for (const flag of ['publish', 'person_dispatch', 'paid_effect']) test(`reject ${flag}`, () => assert.equal(validate({ ...base, [flag]: true }).result, 'FAIL'));
test('unknown consumer fails closed', () => assert.equal(validate({ ...base, consumer: 'unknown' }).result, 'FAIL'));
test('missing source fails closed', () => assert.equal(validate({ ...base, source_ref: '' }).result, 'FAIL'));
test('unqualified generation rejected', () => assert.equal(validate({ ...base, generation: { provider: 'woia-comfyui-local', selected: true, qualified: false } }).result, 'FAIL'));
test('qualified selected generation accepted', () => assert.equal(validate({ ...base, generation: { provider: 'woia-comfyui-local', selected: true, qualified: true, nodes_models: ['qualified-node/model'] } }).result, 'PASS'));
test('legacy asset manifest CLI remains compatible', () => {
  const result = spawnSync(process.execPath, ['skills/marketing-creative/scripts/validate-asset-manifest.mjs', '--file', 'skills/marketing-creative/assets/asset-manifest.example.json'], { encoding: 'utf8' });
  assert.equal(result.status, 0); assert.equal(JSON.parse(result.stdout).result, 'PASS');
});
