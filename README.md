# Defensive AI Remediation Lab — Codex CLI, Human Approval, Patch Validation & Audit-Ready Evidence

Public sanitized lab for a local-first defensive AI remediation workflow.

This repository demonstrates how Codex-assisted review can turn a small static web project into an auditable security evidence package: inventory, threat model, risk triage, safe remediation plan, human approval checklist, local validation, and public candidate summary.

This project is defensive only. It does not contain offensive exploitation, payload development, credential collection, persistence, evasion, third-party scanning, or claims of affiliation with OpenAI. The documentation is aligned with Daybreak concepts and inspired by Codex Security style workflows, but it does not claim access to, endorsement by, or acceptance into OpenAI programs.

## Current System

The underlying app is the Maquina de Fluxos Semanticos content workflow:

- `index.html`: static local-first prompt generator for content replication by mechanism, not identity.
- `templates/copywriter.html`: local copywriting workspace with browser-side project storage.
- `templates/PLANO_REPLICACAO_VIDEO.md`: reusable video replication plan.
- `templates/PROMPTS_STACK_CONTEUDO.md`: prompt library for AI video analysis, FreePik Nanobanana Pro, Seedance, Obsidian, and Codex.
- `docs/STACK_CRIACAO_CONTEUDO.md`: original content workflow architecture.
- `abrir-stack-conteudo.cmd`: Windows launcher that starts a local Python HTTP server bound to `127.0.0.1`.
- `netlify.toml`: static publish configuration and basic security headers.

The app is HTML/CSS/JavaScript only. It has no backend, no database, no login, no package manager dependency, and no server-side credential handling.

## Defensive Scope

In scope:

- repository inventory
- static frontend review
- browser-side storage review
- local launcher review
- deployment metadata review
- documentation sanitization
- human-reviewed remediation planning
- local validation commands

Out of scope:

- scanning external IPs, domains, services, users, or third parties
- offensive security testing
- exploit generation
- credential extraction
- bypass, persistence, evasion, or payload work
- claims of production vulnerability coverage

## Security Posture

Current controls observed:

- local-first operation
- no server-side application logic
- no package manager dependencies
- user input escaped before display in the main app
- generated copy in the copywriter view rendered with `textContent` in dynamic rows
- launcher binds local server to `127.0.0.1`
- Netlify headers include `X-Content-Type-Options: nosniff` and `Referrer-Policy: strict-origin-when-cross-origin`

Primary risks documented:

- local browser storage can retain user-entered content
- nested deployment metadata exists in a packaged template copy and must not be published without review
- ZIP bundles can drift from source files
- future `innerHTML` changes could reintroduce injection risk if user input is not escaped
- static deployment headers can be strengthened with a CSP after compatibility review

## Evidence Package

Evidence files are stored under `docs/`:

- `docs/evidence/01_repository_inventory.md`
- `docs/threat-model/threat_model.md`
- `docs/evidence/02_security_triage.md`
- `docs/remediation/remediation_plan.md`
- `docs/remediation/human_approval_checklist.md`
- `docs/validation/validation_report.md`
- `docs/daybreak-application/daybreak_candidate_summary.md`

## Local Validation

No dependency installation is required.

Recommended safe checks:

```powershell
rg --files
rg -n "SECRET|TOKEN|API[_-]?KEY|PASSWORD|PRIVATE KEY|OPENAI_API_KEY|client_secret" .
node -e "const fs=require('fs'); const files=['index.html','templates/copywriter.html']; for (const file of files) { const html=fs.readFileSync(file,'utf8'); const scripts=[...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)]; for (const m of scripts) new Function(m[1]); console.log(file + ': inline script parse ok'); }"
```

Open locally:

```powershell
.\abrir-stack-conteudo.cmd
```

Or open `index.html` directly in a browser.

## Human Review Gate

Before publishing or committing a release, a human reviewer should confirm:

- no secrets or private identifiers are staged
- no `.netlify` local state is included
- ZIP archives are either regenerated from clean source or intentionally excluded
- docs use bounded language: `public sanitized lab`, `human-reviewed remediation`, `audit-ready evidence`, and `aligned with Daybreak concepts`
- no affiliation with OpenAI is claimed
- all validation commands were run locally and recorded

## Commit Preparation

Suggested commit:

```bash
git add README.md SECURITY.md docs/
git commit -m "Improve Daybreak-aligned defensive remediation evidence"
```
