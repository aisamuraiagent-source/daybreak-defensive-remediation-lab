// Versao remediada para lab local defensivo.
// Entrada do usuario e renderizada como texto puro.

const input = document.getElementById("noteInput");
const button = document.getElementById("renderButton");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  const value = input.value.trim();

  if (!value) {
    output.textContent = "Digite uma nota local para renderizar.";
    return;
  }

  output.textContent = value;
});
