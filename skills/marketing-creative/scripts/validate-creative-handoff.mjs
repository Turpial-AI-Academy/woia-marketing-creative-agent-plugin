// Pure authoring validation; no dispatch or external effects.
export function validateCreativeHandoff(input) {
  const errors = [];
  if (!input || typeof input !== 'object' || Array.isArray(input)) return { result: 'FAIL', errors: ['handoff must be an object'] };
  if (!['Marketing', 'Ads'].includes(input.consumer)) errors.push('unknown consumer');
  if (!['brief', 'design', 'qa', 'variant'].includes(input.operation)) errors.push('operation is outside creative scope');
  if (typeof input.source_ref !== 'string' || !input.source_ref.trim()) errors.push('versioned source_ref is required');
  if (input.publish !== undefined && input.publish !== false) errors.push('publication is not authorized');
  if (input.person_dispatch !== undefined && input.person_dispatch !== false) errors.push('person dispatch is not authorized');
  if (input.paid_effect !== undefined && input.paid_effect !== false) errors.push('paid effects are not authorized');
  if (input.generation !== undefined) {
    const g = input.generation;
    if (!g || g.provider !== 'woia-comfyui-local' || g.selected !== true || g.qualified !== true || !Array.isArray(g.nodes_models) || !g.nodes_models.length || !g.nodes_models.every(x => typeof x === 'string' && x.trim())) errors.push('generation needs selected, actually qualified ComfyUI nodes/models');
  }
  return { result: errors.length ? 'FAIL' : 'PASS', errors };
}
