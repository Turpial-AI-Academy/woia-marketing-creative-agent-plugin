---
name: marketing-creative
description: Define, produce, or audit Marketing creative briefs and asset requirements against strategy, audience, brand overlays, channel formats, provenance, and requested editable-workflow needs.
license: MIT
metadata:
  author: Turpial AI Academy
  version: "0.5.6"
---

# Marketing Creative

Use for creative direction, asset briefs, asset requirements, creative QA, or coordination of a selected creative-generation capability.

## Workflow

1. Read approved strategy/audience/content inputs and Project brand overlays.
2. Define the asset objective, format, dimensions/duration, copy dependencies, mandatory elements, prohibited elements and acceptance criteria.
3. Reuse existing healthy assets when they already satisfy the Task.
4. If the Task explicitly requires generated/edited media or an editable ComfyUI workflow, use the shared `woia-comfyui-local` capability only when the orchestrator selected it.
5. Preserve provenance: source refs, generation/edit workflow refs, model/tool facts when available, and final asset refs.
6. Audit actual assets, not descriptions of assets.
7. Return a reusable asset manifest/handoff.

## Deterministic asset manifest validation

Use `scripts/validate-asset-manifest.mjs --file <manifest.json>` for structural checks before handoff.

The validator requires each asset to have an ID, purpose, media type, source/provenance, and at least one output reference.

## Effects

Creative planning/generation is not publication. External publication belongs to Channel Execution and retains its own authority.

## Eligible consumers and boundary

Marketing and Ads may consume the same creative brief, asset requirements, design and QA contract. Ads may request ad-specific variants; this does not grant campaign, targeting, budget or paid-effect authority. This provider never publishes or contacts a person. Person-directed dispatch belongs to Communications / Customer Service; public publication and paid effects remain separate owners.

Use the additive `scripts/validate-creative-handoff.mjs` guard before accepting a scoped handoff. Existing asset-manifest validation remains compatible. Unknown consumer, action, source or generation qualification fails closed. ComfyUI is optional and must be selected with actually qualified nodes/models. Preserve versioned source refs and provenance; creative approval is not competent acceptance of domain facts or an effect authorization.
