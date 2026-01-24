// --- 1. RECUPERAR DATOS ---
const ultimosResultados =
  JSON.parse(localStorage.getItem("ultimosResultados")) || [];

// Ordenar por puntos (Mayor a menor)
ultimosResultados.sort((a, b) => b.puntos - a.puntos);

// --- 2. LÓGICA DE GANADOR / EMPATE ---
const nombreElem = document.getElementById("player-display");
const scoreElement = document.getElementById("final-score");
const mensajeElem = document.getElementById("final-message");

if (ultimosResultados.length > 0) {
  // 1. Buscamos la puntuación máxima
  const maxPuntos = ultimosResultados[0].puntos;

  // 2. Encontramos cuántos tienen esa puntuación (Array de ganadores)
  const ganadores = ultimosResultados.filter((j) => j.puntos === maxPuntos);

  // Mostramos la puntuación
  if (scoreElement) scoreElement.innerText = maxPuntos;

  // 3. Decidimos qué mostrar según si hay 1 o varios
  if (ganadores.length === 1) {
    // --- UN SOLO GANADOR ---
    const campeon = ganadores[0];
    if (nombreElem) nombreElem.innerText = campeon.nombre;

    if (mensajeElem) {
      // Diferente mensaje si jugó solo o contra gente
      if (ultimosResultados.length > 1) {
        mensajeElem.innerText = `¡${campeon.nombre} HA GANADO EL TORNEO! 🏆`;
        mensajeElem.className = "alert-heading fw-bold text-success mb-0";
      } else {
        mensajeElem.innerText = `¡Partida finalizada!`;
        mensajeElem.className = "alert-heading fw-bold text-primary mb-0";
      }
    }
  } else {
    // --- EMPATE MÚLTIPLE ---
    // Unimos los nombres con comas (Ej: "Ana, Pepe y Luis")
    const nombresGanadores = ganadores.map((g) => g.nombre).join(" y ");

    if (nombreElem) {
      // Cambiamos el título visualmente para que se entienda
      // Usamos innerHTML para poder meter un salto de línea si son muchos
      nombreElem.innerHTML = `<span class="text-warning">${nombresGanadores}</span>`;
    }

    if (mensajeElem) {
      mensajeElem.innerText = `¡EMPATE ENTRE ${ganadores.length} JUGADORES! `;
      mensajeElem.className = "alert-heading fw-bold text-warning mb-0";
    }
  }
} else {
  if (mensajeElem) mensajeElem.innerText = "No hay datos recientes.";
}

// --- 3. GENERAR TABLA HISTÓRICA ---
function cargarRanking() {
  const cuerpoTabla = document.getElementById("ranking-body");
  if (!cuerpoTabla) return;

  let ranking = JSON.parse(localStorage.getItem("rankingTrivialDAW")) || [];
  ranking.sort((a, b) => b.puntos - a.puntos);

  cuerpoTabla.innerHTML = "";

  ranking.forEach((registro, index) => {
    const fila = document.createElement("tr");

    // Resaltar si es de la partida actual
    const esReciente = ultimosResultados.some(
      (u) => u.nombre === registro.nombre && u.puntos === registro.puntos,
    );

    if (esReciente) {
      fila.className = "table-warning fw-bold border-2 border-primary";
    }

    fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${registro.nombre}</td>
            <td class="text-end">${registro.puntos}</td>
        `;
    cuerpoTabla.appendChild(fila);
  });

  if (ranking.length === 0) {
    cuerpoTabla.innerHTML =
      '<tr><td colspan="3" class="text-center text-muted">Sin datos.</td></tr>';
  }
}

window.borrarRanking = () => {
  if (confirm("¿Borrar todo el historial?")) {
    localStorage.removeItem("rankingTrivialDAW");
    localStorage.removeItem("ultimosResultados");
    location.reload();
  }
};

cargarRanking();
