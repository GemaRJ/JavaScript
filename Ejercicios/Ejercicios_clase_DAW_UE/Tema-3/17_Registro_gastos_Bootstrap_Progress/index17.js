// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  // Selectores
  let presupuestoInput = document.querySelector("#presupuestoMensual");
  let categoriaInput = document.querySelector("#categoriaGasto");
  let montoInput = document.querySelector("#montoGasto");
  let formGastos = document.querySelector("#formGastos");
  let presupuestoRestanteSpan = document.querySelector("#presupuestoRestante");
  let barraProgreso = document.querySelector("#barraProgreso");

  // Variables de estado
  let presupuesto = 0;
  let totalGastado = 0;
  let gastosCategorias = {
    Comida: 0,
    Transporte: 0,
    Entretenimiento: 0,
    Otros: 0,
  };

  // Función para actualizar la barra de progreso y el presupuesto restante
  function actualizarProgreso() {
    let porcentaje = presupuesto ? (totalGastado / presupuesto) * 100 : 0;
    barraProgreso.style.width = porcentaje + "%";

    // Cambiar color según porcentaje
    if (porcentaje < 40) {
      barraProgreso.className = "progress-bar bg-success";
    } else if (porcentaje < 70) {
      barraProgreso.className = "progress-bar bg-warning";
    } else {
      barraProgreso.className = "progress-bar bg-danger";
    }

    // Actualizar presupuesto restante
    let restante = presupuesto - totalGastado;
    presupuestoRestanteSpan.textContent = restante.toFixed(2) + " €";
  }

  // Función para actualizar el total por categoría
  function actualizarCategorias() {
    for (let cat in gastosCategorias) {
      document.querySelector(`#${cat}`).textContent =
        gastosCategorias[cat].toFixed(2) + " €";
    }
  }

  // Evento: cambiar presupuesto
  presupuestoInput.addEventListener("change", () => {
    let valor = parseFloat(presupuestoInput.value);
    if (!isNaN(valor) && valor > 0) {
      presupuesto = valor;
      actualizarProgreso();
    } else {
      Swal.fire("Error", "Introduce un presupuesto válido", "error");
      presupuestoInput.value = "";
    }
  });

  // Evento: añadir gasto
  formGastos.addEventListener("submit", (e) => {
    e.preventDefault();

    let categoria = categoriaInput.value;
    let monto = parseFloat(montoInput.value);

    if (!categoria) {
      Swal.fire("Error", "Selecciona una categoría", "error");
      return;
    }
    if (isNaN(monto) || monto <= 0) {
      Swal.fire("Error", "Introduce un monto válido", "error");
      return;
    }
    if (monto > presupuesto - totalGastado) {
      Swal.fire(
        "Atención",
        "El gasto supera el presupuesto restante",
        "warning"
      );
      return;
    }

    // Actualizar total gastado y por categoría
    totalGastado += monto;
    gastosCategorias[categoria] += monto;

    // Actualizar interfaz
    actualizarProgreso();
    actualizarCategorias();

    // Limpiar input de monto
    montoInput.value = "";
  });
});
