# Validation Report — Defensive AI Remediation Lab

Date: 2026-06-12  
Scope: local repository only  
Mode: safe static validation, no external scanning, no dependency installation

## Commands Analyzed

| Command | Decision | Reason |
| --- | --- | --- |
| `npm test` | Not executed | No `package.json` exists. |
| `npm run build` | Not executed | No `package.json` exists. |
| `npm run lint` | Not executed | No `package.json` exists. |
| `.\abrir-stack-conteudo.cmd` | Inspected, not executed | It opens a browser window and starts a local server; source inspection was enough for this evidence pass. |
| External scanners or network probes | Not executed | Explicitly out of scope. |

## Commands Executed

```powershell
rg --files
```

Purpose: inventory repository files.

Result: repository file list was generated; `.git/` was excluded from public evidence.

```powershell
node -e "const fs=require('fs'); const files=['index.html','templates/copywriter.html']; for (const file of files) { const html=fs.readFileSync(file,'utf8'); const scripts=[...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)]; for (const m of scripts) new Function(m[1]); console.log(file + ': inline script parse ok (' + scripts.length + ' script block)'); }"
```

Result:

```text
index.html: inline script parse ok (1 script block)
templates/copywriter.html: inline script parse ok (1 script block)
```

```powershell
rg -n "SECRET|TOKEN|API[_-]?KEY|PASSWORD|PRIVATE KEY|BEGIN RSA|sk-[A-Za-z0-9]|ghp_|github_pat_|Bearer\s+[A-Za-z0-9._-]+|AKIA[0-9A-Z]{16}|OPENAI_API_KEY|client_secret|senha|password"
```

Result: broad scan matched only documentation/checklist text that names secret classes. No concrete secret value was identified by this pattern.

```powershell
rg -n "SECRET|TOKEN|API[_-]?KEY|PASSWORD|PRIVATE KEY|BEGIN RSA|sk-[A-Za-z0-9]|ghp_|github_pat_|Bearer\s+[A-Za-z0-9._-]+|AKIA[0-9A-Z]{16}|OPENAI_API_KEY|client_secret|senha|password" AGENTS.md index.html netlify.toml abrir-stack-conteudo.cmd "Stack de Criacao de Conteudo.url" templates
```

Result: no matches in runtime/source/template files.

```powershell
rg --hidden -n "siteId|\.netlify|deploy-" templates
```

Result: found nested Netlify local deployment state containing `siteId: [REDACTED]`. This was documented as a release metadata risk. The file was not deleted because destructive changes require explicit human approval.

```powershell
tar -tf "templates\Maquina-de-Fluxos-Semanticos-LIMPO.zip"
tar -tf "templates\Maquina de Fluxos Semanticos (LIMPO)\deploy-1780965392480-ce7bdf60-dba0-411c-bdb5-5306ef25da41.zip"
```

Result: both ZIP files listed successfully. The outer ZIP includes `.netlify/state.json` and a nested deploy archive, so archives remain release-gated.

```powershell
$required = @(
  'README.md',
  'SECURITY.md',
  'docs\evidence\01_repository_inventory.md',
  'docs\threat-model\threat_model.md',
  'docs\evidence\02_security_triage.md',
  'docs\remediation\remediation_plan.md',
  'docs\remediation\human_approval_checklist.md',
  'docs\validation\validation_report.md',
  'docs\daybreak-application\daybreak_candidate_summary.md',
  'docs\STACK_CRIACAO_CONTEUDO.md',
  'index.html',
  'templates\copywriter.html',
  'templates\PLANO_REPLICACAO_VIDEO.md',
  'templates\PROMPTS_STACK_CONTEUDO.md',
  'netlify.toml',
  'abrir-stack-conteudo.cmd'
)
foreach ($p in $required) {
  if (Test-Path -LiteralPath $p) { "OK $p" } else { "MISSING $p" }
}
```

Final result: all required paths existed after this report and candidate summary were written.

## Validation Results

| Check | Result | Evidence |
| --- | --- | --- |
| File inventory | Pass | `rg --files` completed. |
| Inline JavaScript syntax | Pass | Both HTML files parsed through `new Function`. |
| Runtime/source secret scan | Pass | No matches in runtime/source/template files. |
| Broad secret scan | Pass with false positives | Matches were documentation references to secret classes, not secret values. |
| Hidden deployment metadata scan | Finding | Nested `siteId: [REDACTED]` exists in `.netlify/state.json`. |
| ZIP integrity listing | Pass with release gate | Both archives listed; outer archive includes deploy state and must be reviewed before publication. |
| Dependency install | Not applicable | No package manifest exists. |
| External scanning | Not applicable | Out of scope and not executed. |

## Corrections Made During Validation

- README now documents defensive scope, local-first behavior, evidence index, and human review gate.
- SECURITY policy now defines defensive-only rules and sensitive-data handling.
- Threat model and triage now record deployment metadata, local storage, archive drift, rendering, launcher, header, validation, and narrative risks.
- Remediation checklist now blocks staging nested `.netlify/` state and ZIP archives without review.

## Failures

No syntax validation failure was observed.

Known release blocker:

- nested `.netlify/state.json` contains `siteId: [REDACTED]`

This is documented but not removed in this pass.

## Pending Items

- add `.gitignore` for `.netlify/`, generated ZIPs, and local deploy state
- remove nested `.netlify/state.json` after explicit human approval
- regenerate or exclude ZIP archives before public release
- add CI static validation
- review CSP/Permissions-Policy before public deployment
