// Obtener referencias a los elementos HTML
let bAnadir = document.querySelector("#btnAgregar");
let bBorrar = document.querySelector("#btnEliminar");
let bObtener = document.querySelector("#btnObtener");
let parrafo = document.querySelector("p");
let inputNombre = document.querySelector("#inputNombre");
let inputApellido = document.querySelector("#inputApellido");
let inputPass = document.querySelector("#inputPass");

// Recuperar usuarios guardados en localStorage al iniciar
let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// --- Botón AGREGAR ---
bAnadir.addEventListener("click", () => {
  // Crear usuario usando la clase Usuario
  let usuario = new Usuario(
    inputNombre.value,
    inputApellido.value,
    inputPass.value
  );

  // Añadir a la lista
  listaUsuarios.push(usuario);

  // Limpiar inputs
  inputPass.value = "";
  inputApellido.value = "";
  inputNombre.value = "";

  // Guardar lista actualizada en localStorage
  localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

  parrafo.textContent = "Usuario añadido.";
});

// --- Botón ELIMINAR ---
bBorrar.addEventListener("click", () => {
  localStorage.removeItem("usuarios");
  listaUsuarios = [];
  parrafo.textContent = "Usuarios eliminados.";
});

// --- Botón OBTENER ---
bObtener.addEventListener("click", () => {
  if (listaUsuarios.length > 0) {
    let ultimoUsuario = listaUsuarios[listaUsuarios.length - 1];
    parrafo.textContent = `Último usuario: ${ultimoUsuario.nombre}`;
  } else {
    parrafo.textContent = "No hay usuarios almacenados.";
  }
});
