document.addEventListener("DOMContentLoaded", () => {
  const cantidadInput = document.querySelector("#cantidad");
  const monedaOrigen = document.querySelector("#monedaOrigen");
  const monedaDestino = document.querySelector("#monedaDestino");
  const btnConvertir = document.querySelector("#btnConvertir");
  const resultadoDiv = document.querySelector("#resultado");

  const tasas = {
    EUR: 1,
    USD: 1.1,
    GBP: 0.85,
    JPY: 160,
  };

  btnConvertir.addEventListener("click", () => {
    let cantidad = parseFloat(cantidadInput.value);
    const origen = monedaOrigen.value;
    const destino = monedaDestino.value;

    if (isNaN(cantidad) || cantidad <= 0) {
      resultadoDiv.innerHTML = `<div class="alert alert-danger">Introduce una cantidad válida.</div>`;
      cantidadInput.focus();
      return;
    }

    const cantidadEnEUR = cantidad / tasas[origen];
    const resultado = cantidadEnEUR * tasas[destino];

    resultadoDiv.innerHTML = `
      <div class="alert alert-success animate__animated animate__fadeIn">
        cantidad origen = <strong>${resultado.toFixed(2)} destino</strong>
      </div>`;
  });
});
