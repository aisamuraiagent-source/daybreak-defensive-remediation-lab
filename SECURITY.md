# Security Policy

## Scope

This repository is a public sanitized defensive AI remediation lab for a small static local-first web app.

Security review in this repository is limited to:

- local source files
- static HTML/CSS/JavaScript behavior
- Markdown documentation
- repository operating rules
- evidence and remediation documentation

The project does not authorize scanning, probing, exploitation, credential testing, or interaction with external systems.

## Defensive Rules

- Do not test third-party domains, IPs, services, accounts, or infrastructure.
- Do not add exploit code, offensive payloads, persistence, evasion, credential collection, or bypass logic.
- Do not publish secrets, tokens, API keys, private keys, passwords, credentials, private paths, usernames, or environment-specific data.
- If sensitive data is found, record only `[REDACTED]` in public evidence and rotate or remove it outside this repository workflow.
- Keep remediation small, reviewable, and reversible.
- Prefer documentation and validation changes unless a code change has explicit human approval.

## Reporting

For this lab, report security concerns as repository-local issues or notes with:

- affected file
- risk category
- impact
- evidence with private values redacted
- recommended defensive remediation
- validation step

Do not include exploit steps or offensive reproduction details.

## Known Public-Lab Limitations

- This is not a production penetration test.
- This is not an enterprise-grade security review.
- This is not a guarantee of complete security coverage.
- This is a bounded, local, public sanitized evidence package.

## Human Approval

Any change that deletes files, changes app behavior, alters generated outputs, modifies release artifacts, or changes public positioning requires explicit human review before merge.
