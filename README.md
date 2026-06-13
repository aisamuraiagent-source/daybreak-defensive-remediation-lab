# Daybreak Defensive Remediation Lab

Public sanitized lab demonstrating a small, local-first defensive remediation workflow with Codex-assisted review, human approval, patch validation, and audit-ready evidence.

This repository is defensive only. It does not contain offensive exploitation, payload development, credential collection, persistence, evasion, third-party scanning, or claims of affiliation with OpenAI. The documentation is aligned with Daybreak concepts, but it does not claim access to, endorsement by, or acceptance into any OpenAI program.

## What This Repository Contains

- `index.html`: static browser UI for a local note-rendering security lab.
- `app.js`: remediated JavaScript. User input is rendered with `textContent`, not `innerHTML`.
- `styles.css`: visual styling only.
- `AGENTS.md`: local defensive operating rules for AI-assisted remediation.
- `SECURITY.md`: defensive-only security policy.
- `docs/`: sanitized evidence package.

The repository has no backend, no database, no login, no package manager manifest, no dependency install step, no external scanner, no Netlify state file, and no ZIP release artifact in the reviewed public scope.

## Defensive Scope

In scope:

- repository inventory
- static frontend review
- JavaScript rendering review
- documentation sanitization
- human-reviewed remediation planning
- local validation guidance
- public evidence trail

Out of scope:

- scanning external IPs, domains, services, users, or third parties
- offensive security testing
- exploit generation
- credential extraction
- bypass, persistence, evasion, or payload work
- claims of production vulnerability coverage
- claims of OpenAI affiliation or acceptance

## Security Posture

Current controls observed:

- local-first static application
- no server-side application logic
- no package manager dependencies
- no external API calls in the app code
- user input rendered through `textContent` in `app.js`
- defensive AI operating rules documented in `AGENTS.md`
- repository security policy documented in `SECURITY.md`
- static validation workflow documented in `.github/workflows/static-validation.yml`
- repository hygiene guardrails documented in `.gitignore`

Primary risks documented:

- future changes could reintroduce `innerHTML` or unsafe dynamic rendering
- public documentation could overclaim OpenAI affiliation, Daybreak access, or security coverage
- deployment hardening would need review if the app is later hosted publicly
- static CI validation exists and must stay synchronized with the evidence package
- evidence must stay synchronized with the actual repository files

## Evidence Package

Evidence files are stored under `docs/`:

- `docs/evidence/01_repository_inventory.md`
- `docs/threat-model/threat_model.md`
- `docs/evidence/02_security_triage.md`
- `docs/remediation/remediation_plan.md`
- `docs/remediation/human_approval_checklist.md`
- `docs/validation/validation_report.md`
- `docs/daybreak-application/daybreak_candidate_summary.md`
- `docs/governance/main_branch_ruleset_evidence.md`

Repository guardrail files:

- `.github/workflows/static-validation.yml`
- `.gitignore`

## Local Validation

No dependency installation is required.

Recommended safe checks:

```powershell
rg --files
rg -n "SECRET|TOKEN|API[_-]?KEY|PASSWORD|PRIVATE KEY|OPENAI_API_KEY|client_secret|sk-[A-Za-z0-9]|ghp_|github_pat_" .
node --check app.js
rg -n "innerHTML|outerHTML|insertAdjacentHTML|eval\(|new Function" app.js index.html
```

Expected rendering control:

```javascript
output.textContent = value;
```

Open locally by double-clicking `index.html` or serving the folder with a local-only static server.

## Human Review Gate

Before publishing, merging, or using this as portfolio evidence, a human reviewer should confirm:

- no secrets or private identifiers are staged
- no local deployment state is included
- no generated archives are included without review
- `app.js` still renders user input with `textContent`
- docs describe only files that actually exist in the repository
- docs use bounded language: `public sanitized lab`, `human-reviewed remediation`, `audit-ready evidence`, and `aligned with Daybreak concepts`
- no OpenAI affiliation, acceptance, or authorization is claimed
- validation commands were run locally and the result was recorded

## Commit Preparation

Suggested commit scope:

```bash
git add README.md SECURITY.md .gitignore docs/
git commit -m "Correct Daybreak evidence to match repository scope"
```
