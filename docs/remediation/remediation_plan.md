# Remediation Plan — Defensive AI Remediation Lab

Date: 2026-06-12  
Scope: safe, low-risk, repository-local remediation

## Remediation Strategy

The repository does not need a framework, backend, database, or dependency install to become a credible public defensive lab. The safest remediation path is documentation, validation, and release gating first.

Applied remediation is intentionally limited to small, reversible changes:

- improve README positioning
- add SECURITY policy
- add repository inventory evidence
- add sanitized threat model
- add security triage table
- add human approval checklist
- add validation report
- add Daybreak-aligned candidate summary

## Applied Changes

| Change | File | Risk reduced |
| --- | --- | --- |
| Reposition repository as public sanitized defensive lab. | `README.md` | Reduces overclaim and scope ambiguity. |
| Add defensive-only security policy. | `SECURITY.md` | Clarifies authorized and prohibited security activity. |
| Record repository inventory. | `docs/evidence/01_repository_inventory.md` | Creates audit-ready baseline. |
| Record repository threat model. | `docs/threat-model/threat_model.md` | Establishes trust boundaries and realistic risk classes. |
| Record triage table. | `docs/evidence/02_security_triage.md` | Prioritizes realistic risks and remediation status. |
| Add human review checklist. | `docs/remediation/human_approval_checklist.md` | Keeps humans in release and destructive-change decisions. |

## Deferred Or Approval-Gated Actions

These actions were not executed because they are destructive, release-affecting, or require explicit human approval:

- delete `templates/**/.netlify/state.json`
- remove or regenerate ZIP archives
- change JavaScript rendering behavior
- change local storage behavior
- change launcher behavior
- add strict CSP headers without compatibility testing
- push to remote repository

## Recommended Next Remediation

1. Add `.gitignore` entries for `.netlify/`, local deploy state, temporary exports, and generated ZIP bundles.
2. After human approval, remove nested `.netlify/state.json` from release candidates.
3. Regenerate ZIP archives from reviewed source or exclude them from public release.
4. Add a static validation script that checks HTML script parsing, internal links, and obvious secret patterns.
5. Add CI that runs the same static validation script.
6. Review a Content Security Policy for static deployment compatibility.
7. Add before/after remediation diff summary once the first commit exists.

## Safety Invariants

- No external targets are scanned.
- No exploit code is generated.
- No secrets are printed.
- Sensitive identifiers are represented as `[REDACTED]`.
- Code changes require human approval.
- Destructive changes are documented before execution.
- Public claims remain bounded and non-affiliated.

