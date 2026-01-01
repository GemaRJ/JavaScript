document.addEventListener("DOMContentLoaded", () => {
  let formulario = document.querySelector("#formPropina");
  let inputMonto = document.querySelector("#montoCuenta");
  let inputPorcentaje = document.querySelector("#porcentajePropina");
  let inputPersonas = document.querySelector("#numeroPersonas");

  let resultadosDiv = document.querySelector("#resultados");

  // Escuchamos el evento submit del formulario
  formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evitamos que la página se recargue al enviar el formulario

    // Obtenemos los valores de los inputs y los convertimos a números
    let monto = parseFloat(inputMonto.value);
    let porcentaje = parseFloat(inputPorcentaje.value);
    let personas = parseInt(inputPersonas.value);

    // VALIDACIONES

    // Validamos que el monto sea un número positivo
    if (isNaN(monto) || monto <= 0) {
      Swal.fire("Error", "Introduce un monto válido", "error");
      return;
    }

    // Validamos que el porcentaje de propina sea un número no negativo
    if (isNaN(porcentaje) || porcentaje < 0) {
      Swal.fire("Error", "Introduce un porcentaje válido", "error");
      return;
    }

    // Validamos que el número de personas sea un entero positivo
    if (isNaN(personas) || personas <= 0) {
      Swal.fire("Error", "Introduce un número de personas válido", "error");
      return;
    }

    // CÁLCULOS

    // Calculamos la propina
    let propina = (monto * porcentaje) / 100;

    // Calculamos el total a pagar (cuenta + propina)
    let total = monto + propina;

    // Calculamos cuánto debe pagar cada persona
    let porPersona = total / personas;

    // MOSTRAR RESULTADOS

    // Creamos tarjetas de Bootstrap para cada resultado
    resultadosDiv.innerHTML = `
      <div class="col-md-4 mb-3">
        <div class="card text-center animate__animated animate__fadeIn">
          <div class="card-body">
            <h5 class="card-title">Propina</h5>
            <p class="card-text">€${propina.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card text-center animate__animated animate__fadeIn">
          <div class="card-body">
            <h5 class="card-title">Total a pagar</h5>
            <p class="card-text">€${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card text-center animate__animated animate__fadeIn">
          <div class="card-body">
            <h5 class="card-title">Monto por persona</h5>
            <p class="card-text">€${porPersona.toFixed(2)}</p>
          </div>
        </div>
      </div>
    `;
  });
});
