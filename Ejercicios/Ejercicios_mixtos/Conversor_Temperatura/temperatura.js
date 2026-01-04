document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btnTemp");
  const valorInput = document.querySelector("#valorTemp");
  const origen = document.querySelector("#origenTemp");
  const destino = document.querySelector("#destinoTemp");
  const resultadoDiv = document.querySelector("#resultadoTemp");

  btn.addEventListener("click", () => {
    let valor = parseFloat(valorInput.value);
    if (isNaN(valor)) {
      resultadoDiv.innerHTML = `<div class='alert alert-danger'>Introduce un valor válido</div>`;
      return;
    }

    let valorC = valor;
    if (origen.value === "f") valorC = ((valor - 32) * 5) / 9;
    if (origen.value === "k") valorC = valor - 273.15;

    let resultado = valorC;
    if (destino.value === "f") resultado = (valorC * 9) / 5 + 32;
    if (destino.value === "k") resultado = valorC + 273.15;

    resultadoDiv.innerHTML = `<div class='alert alert-success'>Resultado: ${resultado.toFixed(
      2
    )}</div>`;
  });
});
