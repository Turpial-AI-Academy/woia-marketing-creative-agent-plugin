# Validation

This existing thin provider has no local bootstrap, doctor, CI or release:check task. Those absent tasks are NOT_APPLICABLE, not PASS. Use exact Ecosystem v0.5.4 central `plugin:certify-thin --repo <path>` after committing the candidate. This covers clean candidate, official manifest/skills, payload safety, provider-domain regression and portable archive. Run `node --test tests/creative.test.mjs` for focused negative handoff guards and unchanged asset-manifest CLI regression. `/tests export-ignore` keeps authoring tests out of the portable payload.

The new guard is additive, pure and effect-free. It validates supplied source references but cannot prove actual adapter qualification or accepted business truth. Operators must resolve those through the owning source/authority contract. No adapter is advertised as qualified by these synthetic tests.
