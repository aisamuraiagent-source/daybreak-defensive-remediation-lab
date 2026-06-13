# Threat Model — Defensive AI Remediation Lab

## Objective Of The System

The system is a static local-first workflow for content analysis, prompt generation, copywriting, and reusable content planning. It runs in the browser, stores data locally, and can be opened directly or through a local launcher.

The defensive objective is to keep the repository safe for public demonstration while preserving audit-ready evidence of how Codex-assisted review can inventory, triage, remediate, validate, and document risk without offensive activity.

## Protected Assets

- user-entered content references and client handles
- generated prompts, copy drafts, and exported Markdown/text files
- local browser storage used by `index.html` and `templates/copywriter.html`
- public repository credibility and sanitized documentation
- deployment metadata and local project identifiers
- integrity of source files, templates, and evidence artifacts

## Trust Boundaries

| Boundary | Controlled side | Less trusted side | Security concern |
| --- | --- | --- | --- |
| Browser UI inputs | App code | User-provided text, links, handles, briefing data | Stored or rendered data must not become script execution or private-data leakage. |
| Browser storage | User browser profile | Anyone with access to same browser profile/device | Local drafts can persist beyond the session. |
| Local launcher | Repository owner | Local machine environment and served files | Launcher should remain local-only and not expose a wider directory. |
| Static deployment | Repository files | Public internet users if deployed | Public build must exclude local state and private identifiers. |
| Documentation | Public lab evidence | Readers, reviewers, recruiters | Claims must be bounded and sanitized. |
| AI tool usage | User-controlled prompt content | External AI platforms chosen by user | Confidential content should not be pasted into external tools without review. |

## Inputs And Outputs

Inputs:

- video/post reference text or link
- Instagram/client identifier
- copywriting briefing fields
- semantic method fields
- prompt/template edits
- local launcher execution

Outputs:

- generated Gemini command text
- copied clipboard content
- downloaded `.txt` command file
- generated copy blocks
- exported Markdown briefing
- browser `localStorage` records
- public Markdown evidence under `docs/`

## Plausible Risks

| Risk | Severity | Defensive recommendation |
| --- | --- | --- |
| Deployment metadata committed from `.netlify/state.json` in nested packaged copy. | Medium | Redact in evidence, exclude from public commit, remove only after human approval. |
| User-entered client/content data persists in `localStorage`. | Medium | Document privacy boundary, add clear-user workflow, avoid shared-browser use for sensitive data. |
| ZIP bundles contain stale or private metadata. | Medium | Regenerate from clean source before release or exclude from public release. |
| Future rendering changes use raw `innerHTML` with user input. | Medium | Preserve `escapeHtml` and `textContent` patterns; review dynamic HTML changes. |
| Static deployment lacks Content Security Policy. | Low/Medium | Add CSP only after browser compatibility review. |
| Local launcher serves unintended files from repository root. | Low | Keep bind to `127.0.0.1`, run only from trusted repo folder, document scope. |
| Documentation overclaims security status or OpenAI relationship. | Medium | Use bounded wording: `public sanitized lab`, `aligned with Daybreak concepts`, `human-reviewed remediation`. |

## Realistic Defensive Attack Paths

These are described conceptually for defense only.

1. A public release accidentally includes local deployment state from a nested package copy. A reviewer or external reader could correlate repository artifacts with a private static deployment identifier. Defensive response: redact, exclude, and require human release review.

2. A user enters sensitive client content into the app on a shared browser profile. The data remains in browser storage and becomes visible to another local user. Defensive response: document local storage behavior and require manual clearing before sharing devices.

3. A future change renders user-controlled text through raw HTML instead of escaped text. Defensive response: preserve current escaping and `textContent` patterns, and add validation checks for dangerous rendering changes.

4. A ZIP archive is treated as clean evidence even though it contains stale files or local deployment metadata. Defensive response: validate archive contents or regenerate archives from reviewed source before publication.

5. Public documentation suggests production-grade vulnerability coverage or OpenAI affiliation. Defensive response: maintain strict claim boundaries and describe this as a public sanitized lab.

## Existing Controls

- no backend or server-side credential processing
- no package manager dependencies
- no external scan or API call in app code
- `index.html` escapes user-derived content through `escapeHtml`
- `templates/copywriter.html` uses DOM creation and `textContent` for user-derived copy rows
- local launcher binds to `127.0.0.1`
- basic Netlify headers in `netlify.toml`
- SECURITY policy added for defensive scope
- remediation docs separate recommended destructive actions from applied low-risk changes

## Gaps

- no automated CI validation
- no committed `.gitignore` policy for local deploy state or ZIP bundles in the required commit scope
- no CSP yet
- no dependency review artifact because no package manifest exists
- no formal release checklist existed before this remediation package
- archive contents were not treated as source of truth

## Severity Calibration

| Severity | Meaning in this repository | Example |
| --- | --- | --- |
| High | A change would expose secrets, execute untrusted script from user input, or publish private operational data at scale. | Raw user input rendered as executable HTML in a public deployment. |
| Medium | A change could expose local identifiers, retain private user content, mislead reviewers, or publish stale artifacts. | `.netlify/state.json` or ZIP bundles committed without review. |
| Low | A weakness reduces clarity, hardening, or repeatability but has limited impact in a static local-first app. | Missing CSP or missing CI on a dependency-free static app. |

No Critical risk is claimed from the current bounded review because there is no backend, no authentication boundary, no secrets intentionally used by the app, and no external system was tested.

