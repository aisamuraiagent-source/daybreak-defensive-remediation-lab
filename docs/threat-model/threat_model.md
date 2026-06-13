# Threat Model — Defensive AI Remediation Lab

Date: 2026-06-13  
Scope: public repository files only  
Mode: defensive, sanitized, no external scanning

## Objective Of The System

The system is a minimal static local-first web lab. A user enters a note in the browser, clicks a render button, and the note is displayed back into the page.

The defensive objective is to demonstrate a bounded remediation workflow: identify an unsafe rendering class, preserve a safer DOM write pattern, validate the repository locally, and publish evidence without offensive content or private data.

## Protected Assets

- user-entered note text during the browser session
- integrity of `app.js` rendering behavior
- public repository credibility
- sanitized remediation evidence
- boundaries around OpenAI/Daybreak-related public claims

## Trust Boundaries

| Boundary | Controlled side | Less trusted side | Security concern |
| --- | --- | --- | --- |
| Browser UI input | App code | User-provided note text | User text must not become executable markup. |
| DOM output | `app.js` rendering logic | Rendered browser document | Output should use text-safe DOM APIs. |
| Repository documentation | Public evidence package | Readers, reviewers, recruiters | Claims must be accurate, bounded, and tied to real files. |
| AI-assisted workflow | Human reviewer and repository owner | AI-generated suggestions | AI output must be reviewed before merge. |
| Future deployment | Repository files | Public internet users if hosted later | Hosting headers and CSP should be reviewed before public deployment. |

## Inputs And Outputs

Inputs:

- note text entered into `#noteInput`
- click event on `#renderButton`
- future documentation edits
- future AI-assisted remediation suggestions

Outputs:

- text rendered into `#output`
- public Markdown evidence under `docs/`
- Git commits and pull request review trail

## Plausible Risks

| Risk | Severity | Defensive recommendation |
| --- | --- | --- |
| Future code change replaces `textContent` with raw HTML rendering. | Medium | Preserve `textContent`; review all `innerHTML`, `outerHTML`, and `insertAdjacentHTML` usage. |
| Public evidence describes files that are not present in the repository. | Medium | Keep inventory and validation tied to actual repository state. |
| Documentation implies OpenAI affiliation, Daybreak acceptance, or production-grade security coverage. | Medium | Use bounded public wording and explicit limitations. |
| No automated CI checks prevent rendering-pattern regression. | Low/Medium | Add lightweight CI in a later PR. |
| Future public hosting lacks reviewed security headers or CSP. | Low/Medium | Add deployment config after hosting target is chosen. |
| Secrets or local state are accidentally committed in future work. | Medium | Add `.gitignore` guardrails and run secret-pattern scans before merge. |

## Realistic Defensive Failure Paths

These are described conceptually for defense only.

1. A future edit renders user input through raw HTML. Defensive response: reject the change unless it is proven safe, and preserve `textContent` for user-derived text.

2. Evidence files drift away from repository reality. Defensive response: validate file paths and remove documentation about unrelated projects.

3. Public language suggests access to or acceptance by OpenAI. Defensive response: state only that the lab is aligned with Daybreak concepts and does not claim affiliation.

4. A future deployment uses default hosting behavior without reviewed headers. Defensive response: add CSP and static headers after testing compatibility.

5. AI-generated remediation is merged without human review. Defensive response: enforce checklist-based review before merge.

## Existing Controls

- no backend
- no server-side credential processing
- no package manager dependencies
- no external API calls in app code
- user input rendered through `output.textContent = value;`
- defensive operating rules in `AGENTS.md`
- defensive-only security policy in `SECURITY.md`
- human approval checklist in `docs/remediation/human_approval_checklist.md`

## Gaps

- no automated CI validation
- no deployment hardening config yet
- no automated documentation path validation
- no signed release notes

## Severity Calibration

| Severity | Meaning in this repository | Example |
| --- | --- | --- |
| High | A change would expose secrets, execute untrusted script from user input, or publish private operational data. | Raw user input rendered as executable HTML in a public deployment. |
| Medium | A change could mislead reviewers, expose local state, or reintroduce unsafe rendering. | Evidence references unrelated files or `innerHTML` is reintroduced. |
| Low | A weakness reduces repeatability or hardening but has limited impact in this static local-first lab. | Missing CI or missing deployment headers before a deployment exists. |

No Critical risk is claimed from the current bounded review because there is no backend, no authentication boundary, no secrets intentionally used by the app, and no external system was tested.
