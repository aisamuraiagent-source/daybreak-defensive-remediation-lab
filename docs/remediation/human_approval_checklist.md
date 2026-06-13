# Human Approval Checklist

Use this checklist before publishing, merging, or deploying the public lab.

## Scope Gate

- [ ] Review is limited to this repository.
- [ ] Current public scope contains only the static lab, defensive rules, security policy, and evidence docs.
- [ ] No external IPs, domains, services, users, or accounts were scanned.
- [ ] No offensive payloads, bypasses, persistence, evasion, or credential workflows were added.
- [ ] No backend, database, login, dependency manager, or external service integration was added.

## Public Sanitization Gate

- [ ] No secrets, API keys, tokens, private keys, passwords, or credentials are staged.
- [ ] No private paths, usernames, local deployment state, or environment-specific IDs are staged.
- [ ] Any sensitive value found in evidence is written only as `[REDACTED]`.
- [ ] Generated archives such as `.zip`, `.tar`, or release bundles are not staged without review.
- [ ] `.netlify/`, local state folders, scratch exports, and temporary files are excluded.

## Code And Behavior Gate

- [ ] `app.js` still renders user-derived content with `textContent`.
- [ ] No `innerHTML`, `outerHTML`, or `insertAdjacentHTML` is used for user-derived content.
- [ ] No `eval` or dynamic code execution is added.
- [ ] No external API calls are added.
- [ ] No persistent browser storage is added without documenting the privacy boundary.
- [ ] No dependency install is required.

## Documentation Gate

- [ ] README describes only files that actually exist in this repository.
- [ ] SECURITY policy defines defensive-only scope.
- [ ] Threat model is conceptual and defensive.
- [ ] Triage table includes impact, probability, severity, evidence, remediation, and status.
- [ ] Validation report separates what was verified from what remains recommended.
- [ ] Daybreak summary says `aligned with Daybreak concepts`, not affiliated, accepted, or authorized.
- [ ] Limitations are explicit and not hidden.

## Commit And Merge Gate

- [ ] Run `git status` locally.
- [ ] Run the validation commands from `docs/validation/validation_report.md`.
- [ ] Stage only intended files.
- [ ] Confirm no unrelated content-workflow files are included.
- [ ] Confirm no generated archives are included.
- [ ] Convert the PR from draft to ready only after the checklist is satisfied.
- [ ] Merge through PR review flow, not direct push to `main`.
