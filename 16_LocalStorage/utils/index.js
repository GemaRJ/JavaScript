// 1. Obtener referencias a los elementos HTML
let bAnadir = document.querySelector("#btnAgregar");
let bBorrar = document.querySelector("#btnEliminar");
let bObtener = document.querySelector("#btnObtener");
let parrafo = document.querySelector("p"); // Selecciona la primera etiqueta <p>
let inputNombre = document.querySelector("#inputNombre");
let inputApellido = document.querySelector("#inputApellido");
let inputPass = document.querySelector("#inputPass");

// 2. Definir los Event Listeners y la Lógica

// --- Lógica del botón AGREGAR ---
bAnadir.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  const apellido = inputApellido.value.trim();
  const pass = inputPass.value.trim();

  if (nombre && apellido && pass) {
    // Simulación de "Agregar"
    parrafo.textContent = `✅ Usuario agregado: ${nombre} ${apellido}.`;
    parrafo.style.color = "green";

    // Limpiar campos después de agregar
    inputNombre.value = "";
    inputApellido.value = "";
    inputPass.value = "";
  } else {
    parrafo.textContent =
      "⚠️ Error: Debe llenar todos los campos para agregar.";
    parrafo.style.color = "red";
  }
});

// --- Lógica del botón ELIMINAR ---
bBorrar.addEventListener("click", () => {
  // Simulación de "Eliminar"

  // Limpiamos los campos
  inputNombre.value = "";
  inputApellido.value = "";
  inputPass.value = "";

  parrafo.textContent = "❌ Campos limpiados. (Simulación de eliminación)";
  parrafo.style.color = "red";
});

// --- Lógica del botón OBTENER ---
bObtener.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  const apellido = inputApellido.value.trim();
  const passLength = inputPass.value.length;

  if (nombre || apellido) {
    // Mostrar datos capturados
    parrafo.textContent = `📋 Datos Obtenidos: Nombre: ${nombre}, Apellido: ${apellido}. Contraseña: (${passLength} caracteres)`;
    parrafo.style.color = "blue";
  } else {
    parrafo.textContent =
      "⚠️ No hay datos en los campos de Nombre/Apellido para obtener.";
    parrafo.style.color = "orange";
  }
});
