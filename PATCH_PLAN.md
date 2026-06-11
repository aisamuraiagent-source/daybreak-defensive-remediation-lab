# PATCH_PLAN.md

## Plano de correcao

### Mudanca proposta

Substituir:

```js
output.innerHTML = value;
```

por:

```js
output.textContent = value;
```

### Justificativa

`textContent` trata a entrada como texto, nao como HTML interpretavel pelo navegador.

### Criterio de aceite

- Entrada do usuario deve aparecer como texto.
- Marcacoes HTML digitadas pelo usuario nao devem ser interpretadas.
- Aplicacao deve continuar funcional.
- Nao deve haver alteracao de escopo.
