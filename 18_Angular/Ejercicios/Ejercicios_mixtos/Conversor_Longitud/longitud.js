document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btnLongitud");
  const valorInput = document.querySelector("#valorLongitud");
  const origen = document.querySelector("#origenLongitud");
  const destino = document.querySelector("#destinoLongitud");
  const resultadoDiv = document.querySelector("#resultadoLongitud");

  btn.addEventListener("click", () => {
    let valor = parseFloat(valorInput.value);
    if (isNaN(valor)) {
      resultadoDiv.innerHTML = `<div class='alert alert-danger'>Introduce un valor válido</div>`;
      return;
    }

    const factores = { metros: 1, kilometros: 1000, millas: 1609.34 };
    let resultado = (valor * factores[origen.value]) / factores[destino.value];

    resultadoDiv.innerHTML = `<div class='alert alert-success'>Resultado: ${resultado.toFixed(
      2
    )}</div>`;
  });
});
