document.addEventListener("DOMContentLoaded", () => {
  // ELEMENTOS DEL DOM
  let tareasPendientes = document.querySelector("#tareasPendientes");
  let gastosMes = document.querySelector("#gastosMes");
  let proximosEventos = document.querySelector("#proximosEventos");

  let formTareas = document.querySelector("#formTareas");
  let listaTareas = document.querySelector("#listaTareas");
  let nuevaTarea = document.querySelector("#nuevaTarea");
  let prioridadTarea = document.querySelector("#prioridadTarea");

  let formGastos = document.querySelector("#formGastos");
  let listaGastos = document.querySelector("#listaGastos");
  let nombreGasto = document.querySelector("#nombreGasto");
  let cantidadGasto = document.querySelector("#cantidadGasto");

  let formEventos = document.querySelector("#formEventos");
  let listaEventos = document.querySelector("#listaEventos");
  let nombreEvento = document.querySelector("#nombreEvento");

  let monto = document.querySelector("#monto");
  let monedaDestino = document.querySelector("#monedaDestino");
  let btnConvertir = document.querySelector("#btnConvertir");
  let resultadoConversion = document.querySelector("#resultadoConversion");

  //  VARIABLES
  let contadorTareas = 0;
  let totalGastos = 0;
  let contadorEventos = 0;

  // FUNCIONES DE TAREAS
  formTareas.addEventListener("submit", (e) => {
    e.preventDefault();
    let tarea = nuevaTarea.value.trim();
    let prioridad = prioridadTarea.value;

    if (!tarea) return;

    let li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      ${tarea} <span class="badge ${
      prioridad === "Alta"
        ? "bg-danger"
        : prioridad === "Media"
        ? "bg-warning"
        : "bg-success"
    } rounded-pill">${prioridad}</span>
      <div>
        <button class="btn btn-sm btn-success me-1 completar">✔</button>
        <button class="btn btn-sm btn-danger eliminar">✖</button>
      </div>
    `;

    // Botones completar y eliminar
    li.querySelector(".completar").addEventListener("click", () => {
      li.style.textDecoration =
        li.style.textDecoration === "line-through" ? "" : "line-through";
    });
    li.querySelector(".eliminar").addEventListener("click", () => {
      li.remove();
      contadorTareas--;
      tareasPendientes.textContent = contadorTareas;
    });

    listaTareas.appendChild(li);
    nuevaTarea.value = "";
    contadorTareas++;
    tareasPendientes.textContent = contadorTareas;
  });

  // FUNCIONES DE GASTOS
  formGastos.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = nombreGasto.value.trim();
    let cantidad = parseFloat(cantidadGasto.value);

    if (!nombre || isNaN(cantidad)) return;

    let li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = `${nombre}: €${cantidad.toFixed(2)}`;

    listaGastos.appendChild(li);
    nombreGasto.value = "";
    cantidadGasto.value = "";
    totalGastos += cantidad;
    gastosMes.textContent = `${totalGastos.toFixed(2)} €`;
  });

  // FUNCIONES DE EVENTOS
  formEventos.addEventListener("submit", (e) => {
    e.preventDefault();
    let evento = nombreEvento.value.trim();
    if (!evento) return;

    let li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = evento;

    listaEventos.appendChild(li);
    nombreEvento.value = "";
    contadorEventos++;
    proximosEventos.textContent = contadorEventos;
  });

  // FUNCION CONVERSOR DE MONEDAS
  btnConvertir.addEventListener("click", () => {
    let valor = parseFloat(monto.value);
    if (isNaN(valor)) {
      Swal.fire("Error", "Ingresa un monto válido", "error");
      return;
    }

    let tipo = monedaDestino.value;
    let resultado;

    switch (tipo) {
      case "USD":
        resultado = valor * 1.1;
        break;
      case "GBP":
        resultado = valor * 0.85;
        break;
      case "JPY":
        resultado = valor * 150;
        break;
    }
    resultadoConversion.textContent = `${resultado.toFixed(2)} ${tipo}`;
  });
});
