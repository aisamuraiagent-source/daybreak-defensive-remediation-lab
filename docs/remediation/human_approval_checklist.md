# Human Approval Checklist

Use this checklist before publishing, committing, or deploying the public lab.

## Scope Gate

- [ ] Review is limited to this local repository.
- [ ] No external IPs, domains, services, users, or accounts were scanned.
- [ ] No offensive payloads, bypasses, persistence, evasion, or credential workflows were added.
- [ ] No backend, database, login, or dependency was added without explicit need.

## Public Sanitization Gate

- [ ] No secrets, API keys, tokens, private keys, passwords, or credentials are staged.
- [ ] Any sensitive value found in evidence is written only as `[REDACTED]`.
- [ ] Local deployment identifiers are excluded or redacted.
- [ ] Absolute personal machine paths are not included in public evidence.
- [ ] ZIP archives were reviewed or intentionally excluded.
- [ ] `.netlify/` local state is excluded from public release.

## Code And Behavior Gate

- [ ] `index.html` still escapes user-derived content before HTML rendering.
- [ ] `templates/copywriter.html` still uses `textContent` or DOM APIs for user-derived dynamic rows.
- [ ] `localStorage` behavior is documented.
- [ ] Launcher still binds to `127.0.0.1`.
- [ ] No external API calls were added.
- [ ] No dependency install was required.

## Documentation Gate

- [ ] README starts with the required defensive lab title.
- [ ] SECURITY policy defines defensive-only scope.
- [ ] Threat model is conceptual and defensive.
- [ ] Triage table includes impact, probability, severity, evidence, remediation, and status.
- [ ] Validation report records commands analyzed and executed.
- [ ] Daybreak summary says `aligned with Daybreak concepts`, not affiliated or accepted.
- [ ] Limitations are explicit and not hidden.

## Commit Gate

- [ ] Run `git status`.
- [ ] Stage only intended files.
- [ ] Do not stage nested `.netlify/` state.
- [ ] Do not stage ZIP archives unless explicitly reviewed and approved.
- [ ] Commit message matches the approved remediation scope.

