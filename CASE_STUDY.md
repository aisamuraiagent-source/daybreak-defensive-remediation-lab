# Case Study — Daybreak Defensive Remediation Lab

## Summary

This lab demonstrates a local defensive remediation workflow using OpenAI Codex CLI in a controlled Windows environment.

The goal was not to exploit a system. The goal was to document a safe remediation cycle:

1. Identify a security-relevant code pattern.
2. Document the risk.
3. Plan the patch.
4. Apply the remediation with AI assistance.
5. Validate the result locally.
6. Preserve a clean Git history.

## Scenario

A small local HTML/CSS/JavaScript application rendered user-controlled input into the DOM.

The initial version used:

```js
output.innerHTML = value;
```

This pattern can be unsafe when handling untrusted input because it allows the browser to interpret the value as HTML.

## Remediation

The patch replaced unsafe HTML rendering with text-only rendering:

```js
output.textContent = value;
```

This preserves the intended functionality while preventing user-provided markup from being interpreted as HTML.

## Validation

The remediation was validated locally with:

- syntax check;
- source review;
- confirmation that `app.js` no longer contains `innerHTML`;
- confirmation that `textContent` is used for rendering user input;
- creation of a sanitized verification report.

## Human-in-the-loop control

Codex applied the remediation but did not commit automatically.

The human operator reviewed the diff, validated the result and committed the approved change manually.

## Scope boundaries

This lab was performed only on local, self-owned code.

No external target was accessed.
No network scanning was performed.
No exploitation against third-party systems was performed.
No sensitive local data was collected.
No offensive tooling was used.

## Evidence

Git history:

```text
Create Daybreak defensive remediation lab baseline
Apply defensive DOM rendering remediation
```

Relevant files:

- `SECURITY_REVIEW.md`
- `PATCH_PLAN.md`
- `VERIFICATION_PLAN.md`
- `PUBLIC_REMEDIATION_SUMMARY.md`
- `PATCH_VERIFICATION_RESULT.md`

## Professional relevance

This lab demonstrates:

- defensive AI workflow;
- secure code review;
- vulnerability triage;
- patch validation;
- human approval;
- audit-ready documentation;
- sanitized public evidence.
