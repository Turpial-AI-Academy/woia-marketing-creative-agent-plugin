---
name: marketing-creative
description: Define, produce, or audit Marketing creative briefs and asset requirements against strategy, audience, brand overlays, channel formats, provenance, and requested editable-workflow needs.
license: MIT
metadata:
  author: Turpial AI Academy
  version: "0.5.0"
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
