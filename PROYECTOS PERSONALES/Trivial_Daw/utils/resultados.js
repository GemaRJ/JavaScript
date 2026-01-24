document.addEventListener("DOMContentLoaded", () => {
  // --- 1. RECUPERAR DATOS ---
  const ultimosResultados =
    JSON.parse(localStorage.getItem("ultimosResultados")) || [];
  const rankingHist =
    JSON.parse(localStorage.getItem("rankingTrivialDAW")) || [];

  // --- 2. ELEMENTOS DEL DOM ---
  const nombreElem = document.querySelector("#player-display");
  const scoreElement = document.querySelector("#final-score");
  const mensajeElem = document.querySelector("#final-message");
  const cuerpoTabla = document.querySelector("#ranking-body");

  // --- 3. FUNCIONES ---
  function mostrarGanador() {
    if (ultimosResultados.length === 0) {
      if (mensajeElem) mensajeElem.innerText = "No hay datos recientes.";
      if (nombreElem) nombreElem.innerText = "...";
      if (scoreElement) scoreElement.innerText = "0";
      return;
    }

    ultimosResultados.sort((a, b) => b.puntos - a.puntos);
    const maxPuntos = ultimosResultados[0].puntos;
    const ganadores = ultimosResultados.filter((j) => j.puntos === maxPuntos);

    if (scoreElement) scoreElement.innerText = maxPuntos;

    if (ganadores.length === 1) {
      const campeon = ganadores[0];
      if (nombreElem) nombreElem.innerText = campeon.nombre;
      if (mensajeElem) {
        mensajeElem.innerText =
          ultimosResultados.length > 1
            ? `¡${campeon.nombre} HA GANADO EL TORNEO! 🏆`
            : `¡Partida finalizada!`;
        mensajeElem.className =
          ultimosResultados.length > 1
            ? "alert-heading fw-bold text-success mb-0"
            : "alert-heading fw-bold text-primary mb-0";
      }
    } else {
      const nombresGanadores = ganadores.map((g) => g.nombre).join(" y ");
      if (nombreElem)
        nombreElem.innerHTML = `<span class="text-warning">${nombresGanadores}</span>`;
      if (mensajeElem) {
        mensajeElem.innerText = `¡EMPATE ENTRE ${ganadores.length} JUGADORES!`;
        mensajeElem.className = "alert-heading fw-bold text-warning mb-0";
      }
    }
  }

  function cargarRanking() {
    cuerpoTabla.innerHTML = "";

    if (rankingHist.length === 0) {
      cuerpoTabla.innerHTML =
        '<tr><td colspan="3" class="text-center text-muted">Sin datos.</td></tr>';
      return;
    }

    // Ordenar por puntos descendente
    rankingHist.sort((a, b) => b.puntos - a.puntos);

    rankingHist.forEach((registro, index) => {
      const fila = document.createElement("tr");

      // Resaltar si es de la partida actual
      const esReciente = ultimosResultados.some(
        (u) => u.nombre === registro.nombre && u.puntos === registro.puntos,
      );
      if (esReciente)
        fila.className = "table-warning fw-bold border-2 border-primary";

      fila.innerHTML = `
        <td>${index + 1}</td>
        <td>${registro.nombre}</td>
        <td class="text-end">${registro.puntos}</td>
      `;
      cuerpoTabla.appendChild(fila);
    });
  }

  window.borrarRanking = () => {
    if (confirm("¿Borrar todo el historial?")) {
      localStorage.removeItem("rankingTrivialDAW");
      localStorage.removeItem("ultimosResultados");
      location.reload();
    }
  };

  // --- 4. EJECUTAR ---
  mostrarGanador();
  cargarRanking();
});
