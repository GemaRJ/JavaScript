document.addEventListener("DOMContentLoaded", () => {
  /*  CONVERSOR DE LONGITUD */

  let btnLongitud = document.querySelector("#btnLongitud");
  let valorLongitud = document.querySelector("#valorLongitud");
  let origenLongitud = document.querySelector("#origenLongitud");
  let destinoLongitud = document.querySelector("#destinoLongitud");
  let resultadoLongitud = document.querySelector("#resultadoLongitud");

  btnLongitud.addEventListener("click", () => {
    let valor = parseFloat(valorLongitud.value);

    if (isNaN(valor)) {
      resultadoLongitud.innerHTML = `<div class="alert alert-danger">Introduce un valor válido</div>`;
      return;
    }

    let factores = {
      metros: 1,
      kilometros: 1000,
      millas: 1609.34,
    };

    let resultado =
      (valor * factores[origenLongitud.value]) /
      factores[destinoLongitud.value];

    resultadoLongitud.innerHTML = `<div class="alert alert-success">Resultado: ${resultado.toFixed(
      2
    )}</div>`;
  });

  /*  CONVERSOR DE PESO */

  let btnPeso = document.querySelector("#btnPeso");
  let valorPeso = document.querySelector("#valorPeso");
  let origenPeso = document.querySelector("#origenPeso");
  let destinoPeso = document.querySelector("#destinoPeso");
  let resultadoPeso = document.querySelector("#resultadoPeso");

  btnPeso.addEventListener("click", () => {
    let valor = parseFloat(valorPeso.value);

    if (isNaN(valor)) {
      resultadoPeso.innerHTML = `<div class="alert alert-danger">Introduce un valor válido</div>`;
      return;
    }

    let factores = {
      kg: 1,
      lb: 0.453592,
      oz: 0.0283495,
    };

    let resultado =
      (valor * factores[origenPeso.value]) / factores[destinoPeso.value];

    resultadoPeso.innerHTML = `<div class="alert alert-success">Resultado: ${resultado.toFixed(
      2
    )}</div>`;
  });

  /*  CONVERSOR DE TEMPERATURA */

  let btnTemp = document.querySelector("#btnTemp");
  let valorTemp = document.querySelector("#valorTemp");
  let origenTemp = document.querySelector("#origenTemp");
  let destinoTemp = document.querySelector("#destinoTemp");
  let resultadoTemp = document.querySelector("#resultadoTemp");

  btnTemp.addEventListener("click", () => {
    let valor = parseFloat(valorTemp.value);
    let resultado;

    if (isNaN(valor)) {
      resultadoTemp.innerHTML = `<div class="alert alert-danger">Introduce un valor válido</div>`;
      return;
    }

    // Convertir a Celsius
    if (origenTemp.value === "f") valor = ((valor - 32) * 5) / 9;
    if (origenTemp.value === "k") valor = valor - 273.15;

    // Convertir desde Celsius
    if (destinoTemp.value === "f") resultado = (valor * 9) / 5 + 32;
    else if (destinoTemp.value === "k") resultado = valor + 273.15;
    else resultado = valor;

    resultadoTemp.innerHTML = `<div class="alert alert-success">Resultado: ${resultado.toFixed(
      2
    )}</div>`;
  });
});
