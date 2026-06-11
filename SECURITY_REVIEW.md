# SECURITY_REVIEW.md

## Revisao defensiva inicial

### Escopo

Aplicacao local propria composta por HTML, CSS e JavaScript.

### Achado

O arquivo `app.js` usa `innerHTML` para renderizar entrada controlada pelo usuario.

### Classificacao

Risco defensivo comum: renderizacao insegura de entrada nao confiavel.

### Impacto

Em uma aplicacao real, esse padrao pode permitir injecao de HTML/script no DOM caso a entrada venha de usuario, URL, API, banco de dados, integracao ou fonte nao confiavel.

### Evidencia

Trecho observado:

```js
output.innerHTML = value;

```

### Recomendacao

Substituir `innerHTML` por `textContent` quando o objetivo for exibir texto puro.

### Limites

Este laboratorio nao executa exploracao contra terceiros.
O codigo e local, proprio e controlado.
