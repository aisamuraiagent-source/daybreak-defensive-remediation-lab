// VERSAO INICIAL INTENCIONALMENTE INSEGURA PARA LAB LOCAL DEFENSIVO.
// Risco: renderizacao direta de entrada do usuario com innerHTML.
// Objetivo: permitir triagem defensiva e patch posterior em codigo proprio.

const input = document.getElementById("noteInput");
const button = document.getElementById("renderButton");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  const value = input.value.trim();

  if (!value) {
    output.textContent = "Digite uma nota local para renderizar.";
    return;
  }

  output.innerHTML = value;
});
