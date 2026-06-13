# Main Branch Ruleset Evidence

Date: 2026-06-13  
Scope: repository governance evidence  
Mode: defensive, audit-ready documentation

## Purpose

This document records the repository governance state after the static defensive validation workflow was added and the main branch ruleset was manually configured in GitHub.

Rulesets are repository settings and are not stored directly as versioned source files. This document provides a public sanitized evidence record for reviewers.

## Repository Control Objective

The `main` branch should only change through a controlled review path:

1. A pull request is opened against `main`.
2. The static defensive validation workflow runs.
3. Required checks pass.
4. Review conversations are resolved.
5. The change is merged through the GitHub pull request flow.

## Ruleset Configuration Recorded

Ruleset name:

```text
main-defensive-ci-protection
```

Target branch:

```text
main
```

Observed intended controls:

| Control | Expected state | Reason |
| --- | --- | --- |
| Enforcement status | Active | The rule must apply to `main`. |
| Bypass list | Empty | Avoid silent exceptions in the public lab. |
| Restrict creations | Off | Branch creation does not need to be blocked for this lab. |
| Restrict updates | Off | Normal pull request merges must be allowed. |
| Restrict deletions | On | Prevent accidental or unauthorized deletion of `main`. |
| Require linear history | On | Keep history clean and easier to audit. |
| Require pull request before merging | On | Prevent direct changes to `main`. |
| Required approvals | 0 | Single-maintainer lab; evidence is in PR trail and CI. |
| Require conversation resolution | On | Ensure review comments are resolved before merge. |
| Require status checks to pass | On | Require automated validation before merge. |
| Required status check | `Static Defensive Validation` | Bind branch protection to the repository CI workflow. |
| Require deployments to succeed | Off | No deployment environment is part of this lab yet. |
| Require signed commits | Off | Deferred until signing is configured consistently. |

## Required Workflow Evidence

The required workflow is defined at:

```text
.github/workflows/static-validation.yml
```

The workflow name is:

```text
Static Defensive Validation
```

It runs on:

- pull requests targeting `main`
- pushes to `main`
- manual workflow dispatch

## Workflow Checks

The workflow validates:

- required repository files exist
- `app.js` passes `node --check app.js`
- runtime files do not contain unsafe rendering or dynamic execution patterns
- runtime files do not contain obvious secret patterns
- local state and generated archive artifacts are not committed
- bounded public-claim language remains present

## Security Boundary

This governance setup does not perform offensive testing. It does not scan external targets, install application dependencies, probe third-party systems, or claim production security coverage.

The value of the setup is repeatability: every future PR can produce automatic validation evidence before reaching `main`.

## Review Notes

This document is an evidence record based on manual GitHub settings configuration plus repository workflow state. If the ruleset is changed in the GitHub UI, this document should be updated in the same pull request cycle.

## Current Follow-Up

Recommended next hardening steps:

1. Verify that future PRs are blocked until `Static Defensive Validation` succeeds.
2. Remove or disable redundant rulesets after confirming there is no loss of control.
3. Add release notes after the governance evidence is merged.
