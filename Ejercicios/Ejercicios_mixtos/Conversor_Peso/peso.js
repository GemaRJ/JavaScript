document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btnPeso");
  const valorInput = document.querySelector("#valorPeso");
  const origen = document.querySelector("#origenPeso");
  const destino = document.querySelector("#destinoPeso");
  const resultadoDiv = document.querySelector("#resultadoPeso");

  btn.addEventListener("click", () => {
    let valor = parseFloat(valorInput.value);
    if (isNaN(valor)) {
      resultadoDiv.innerHTML = `<div class='alert alert-danger'>Introduce un valor válido</div>`;
      return;
    }

    const factores = { kg: 1, lb: 0.453592, oz: 0.0283495 };
    let resultado = (valor * factores[origen.value]) / factores[destino.value];

    resultadoDiv.innerHTML = `<div class='alert alert-success'>Resultado: ${resultado.toFixed(
      2
    )}</div>`;
  });
});
