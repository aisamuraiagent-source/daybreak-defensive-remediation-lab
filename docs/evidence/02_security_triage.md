# Security Triage — Defensive Evidence

Date: 2026-06-12  
Scope: local repository only  
Mode: defensive, sanitized, no external scanning

| ID | Area | Risco | Impacto | Probabilidade | Severidade | Evidencia | Remediacao recomendada | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R-001 | Deployment metadata | Nested `.netlify/state.json` contains a local deployment identifier. | Public correlation of private deployment metadata if committed or bundled. | Medium | Medium | `templates/**/.netlify/state.json` contains `siteId: [REDACTED]`. | Exclude from public commit; remove only after human approval; rotate/relink outside repo if needed. | Documented; not deleted due destructive-change rule. |
| R-002 | Release archives | ZIP bundles can contain stale source, deploy artifacts, or local metadata. | Public release may differ from reviewed source or expose private state. | Medium | Medium | `templates/*.zip` and nested deploy archive are present. | Regenerate from reviewed source or exclude from release; validate archive contents before publishing. | Documented. |
| R-003 | Browser storage | User-entered references, client handles, and copy briefs persist in `localStorage`. | Sensitive client/content drafts may remain visible on shared devices. | Medium | Medium | `index.html` and `templates/copywriter.html` use `localStorage`. | Document privacy boundary; use reset/clear controls before sharing; avoid confidential data in shared browsers. | Documented in README/SECURITY. |
| R-004 | Dynamic rendering | Future raw `innerHTML` changes could create injection risk if escaping is bypassed. | User-controlled text could render as executable markup in a future regression. | Low/Medium | Medium | Current app uses `escapeHtml` in main output and `textContent` in copy rows; some static `innerHTML` remains. | Preserve escaping patterns; review all new `innerHTML` usage; add static checks later. | Existing control documented. |
| R-005 | Local launcher | `.cmd` starts a local Python HTTP server from repository root. | If misused, unintended local files may be served to local browser context. | Low | Low | `abrir-stack-conteudo.cmd` uses `python -m http.server` with `--bind 127.0.0.1`. | Keep local bind; run only from trusted repo; avoid adding private files under publish root. | Existing control documented. |
| R-006 | Static deployment headers | `netlify.toml` has basic headers but no CSP or Permissions-Policy. | Reduced browser hardening if publicly deployed. | Medium | Low/Medium | `netlify.toml` includes `nosniff` and `Referrer-Policy` only. | Add CSP/Permissions-Policy after compatibility review. | Planned. |
| R-007 | Validation | No automated test, lint, or CI workflow exists. | Regressions in script syntax, links, or documentation paths may go unnoticed. | Medium | Low/Medium | No `package.json`; no CI config found. | Add local validation script and CI later; record manual validation now. | Validation report added. |
| R-008 | Public narrative | Documentation can overclaim OpenAI relationship, Daybreak access, or security coverage. | Misleading public evidence and reputational risk. | Medium | Medium | README required strict positioning update. | Use bounded language: `aligned with Daybreak concepts`, `public sanitized lab`, no affiliation claim. | Remediated in README and Daybreak summary. |
| R-009 | External AI workflow | Prompts may lead users to paste confidential content into external AI tools. | Data egress to third-party tools chosen by the user. | Medium | Medium | Templates reference ChatGPT, Gemini, Claude, FreePik, Seedance, and Obsidian workflows. | Document review requirement before pasting confidential material; keep repo local-first. | Documented. |

## Prioritization

Highest practical priority before public release:

1. Exclude or remove local deployment state and ZIP bundles after human approval.
2. Preserve safe rendering patterns around user-controlled text.
3. Add release checklist and validation evidence.
4. Keep public narrative bounded and non-affiliated.

