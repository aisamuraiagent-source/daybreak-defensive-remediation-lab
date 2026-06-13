# Repository Inventory — Defensive Evidence

Date: 2026-06-12  
Scope: local repository only  
Mode: defensive, sanitized, no external scanning

## Summary

This repository contains a static local-first content workflow app plus Markdown templates and documentation. The primary runtime surface is browser-executed HTML/CSS/JavaScript. There is no backend, no package manager manifest, no database, and no server-side authentication layer.

## Summarized Tree

```text
.
├── AGENTS.md
├── README.md
├── SECURITY.md
├── abrir-stack-conteudo.cmd
├── index.html
├── netlify.toml
├── Stack de Criacao de Conteudo.url
├── docs/
│   ├── STACK_CRIACAO_CONTEUDO.md
│   ├── daybreak-application/
│   ├── evidence/
│   ├── remediation/
│   ├── threat-model/
│   └── validation/
└── templates/
    ├── copywriter.html
    ├── PLANO_REPLICACAO_VIDEO.md
    ├── PROMPTS_STACK_CONTEUDO.md
    ├── Maquina-de-Fluxos-Semanticos-LIMPO.zip
    └── Maquina de Fluxos Semanticos (LIMPO)/
        ├── duplicated static source
        ├── deploy archive
        └── .netlify/state.json
```

`.git/` is intentionally excluded from this public inventory.

## Main Files

| File | Purpose | Security relevance |
| --- | --- | --- |
| `index.html` | Main static app for generating a Gemini command from two inputs. | Browser-side input handling, `localStorage`, clipboard, export, dynamic rendering. |
| `templates/copywriter.html` | Local copywriting workspace with saved projects. | Larger browser-side data surface, `localStorage`, export, dynamic rendering. |
| `abrir-stack-conteudo.cmd` | Starts local Python HTTP server and opens the app. | Executable local launcher, binds to `127.0.0.1`. |
| `netlify.toml` | Static hosting config. | Security headers and publish scope. |
| `docs/STACK_CRIACAO_CONTEUDO.md` | Original workflow architecture. | Documents intended use and boundaries. |
| `templates/*.md` | Reusable content workflow templates. | Prompt and process documentation. |
| `templates/**/*.zip` | Archived bundles and deployment packages. | Drift and metadata risk if published without review. |
| `templates/**/.netlify/state.json` | Local Netlify deployment state in nested package copy. | Contains a deployment identifier recorded as `[REDACTED]` in public evidence. |

## Technologies Used

- HTML5
- CSS
- Vanilla JavaScript
- Browser APIs: `localStorage`, Clipboard API, Blob/Object URL download
- Markdown
- Windows CMD + PowerShell launcher
- Python `http.server` through local launcher
- Netlify static configuration

## Entry Points

- `index.html`
- `templates/copywriter.html`
- `abrir-stack-conteudo.cmd`
- `Stack de Criacao de Conteudo.url`
- Static deployment root configured by `netlify.toml`

## Configuration Files

- `AGENTS.md`: project instructions and operating rules.
- `README.md`: public positioning and usage.
- `SECURITY.md`: defensive security policy.
- `netlify.toml`: static deploy publish path and headers.
- `templates/**/.netlify/state.json`: local deployment state found in nested packaged copy; value redacted.

## Executable Scripts

| Script | Behavior | Defensive note |
| --- | --- | --- |
| `abrir-stack-conteudo.cmd` | Uses PowerShell to check port `4173`, starts `python -m http.server 4173 --bind 127.0.0.1`, opens local URL. | Local-only bind reduces network exposure; reviewer should ensure only intended files are served. |
| Inline script in `index.html` | Saves two inputs, generates command, copies/downloads text. | User input is escaped before display through `escapeHtml`. |
| Inline script in `templates/copywriter.html` | Saves projects, renders copy blocks, exports Markdown. | Dynamic rows use DOM APIs and `textContent` for user-derived display. |

## Dependencies Identified

No package manager dependencies were identified:

- no `package.json`
- no lockfile
- no imported frontend framework
- no backend runtime dependency

Runtime assumptions:

- modern browser
- optional Python available for local launcher
- optional static host if deployed

## Defensive Risk Surface

- browser-side persistence of user-entered client/content data in `localStorage`
- static HTML dynamic rendering patterns that require continued escaping discipline
- copied/exported generated text that may contain user-provided content
- local launcher serving repository files from the current directory
- nested deploy metadata and archive bundles that can leak stale or environment-specific state
- static deploy headers that can be strengthened with a reviewed CSP
- documentation claims that must avoid implying affiliation, external authorization, or production-grade vulnerability coverage

## Out of Scope

- external IP, domain, account, or service scanning
- penetration testing
- exploit development
- third-party platform assessment
- production vulnerability certification
- private candidate submission claims
- deletion of existing files without explicit human approval

