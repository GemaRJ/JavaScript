document.addEventListener("DOMContentLoaded", () => {
  // Selectores
  let cantidadInput = document.querySelector("#cantidad");
  let monedaOrigen = document.querySelector("#monedaOrigen");
  let monedaDestino = document.querySelector("#monedaDestino");
  let btnConvertir = document.querySelector("#btnConvertir");
  let resultadoDiv = document.querySelector("#resultado");

  // Tasas de conversión fijas (base EUR)
  let tasas = {
    EUR: 1,
    USD: 1.1,
    GBP: 0.85,
    JPY: 160,
  };

  btnConvertir.addEventListener("click", () => {
    let cantidad = parseFloat(cantidadInput.value);
    let origen = monedaOrigen.value;
    let destino = monedaDestino.value;

    // Validación
    if (isNaN(cantidad) || cantidad <= 0) {
      resultadoDiv.innerHTML = `
        <div class="alert alert-danger">
          Introduce una cantidad válida.
        </div>
      `;
      cantidadInput.focus();
      return;
    }

    // Conversión
    let cantidadEnEUR = cantidad / tasas[origen];
    let resultado = cantidadEnEUR * tasas[destino];

    // Mostrar resultado
    resultadoDiv.innerHTML = `
      <div class="alert alert-success animate__animated animate__fadeIn">
        ${cantidad} ${origen} = <strong>${resultado.toFixed(
      2
    )} ${destino}</strong>
      </div>
    `;
  });
});
