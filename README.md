# woia-marketing-creative

WOIA Marketing v0.5.7 provider for `marketing.creative`.

- Primary skill: `$marketing-creative`
- Authoring profile: thin
- Origin: WOIA-native

Capability-owned deterministic tools/templates live in this plugin. Generic certification/release tooling lives in `woia-ecosystem`.

Marketing and Ads consume briefs/design/QA and ad-specific variants. No publication, paid effect or person dispatch is provided. Optional ComfyUI needs actual selected nodes/models qualification.

## Maintenance

Edit only this canonical repository. Keep `plugin.json`, `package.json` and `dev.woia/manifest.json` versions aligned. From the canonical WOIA Ecosystem repository, run `mise run plugin:certify-thin --repo <absolute-plugin-repository>`, then use its release preparation/publication tasks. Install and update consumers from immutable published artifacts; keep Project personalization in overlays.
