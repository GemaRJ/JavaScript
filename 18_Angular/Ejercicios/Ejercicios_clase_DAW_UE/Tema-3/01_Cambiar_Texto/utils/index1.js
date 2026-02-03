// Esperamos a que cargue todo el DOM
document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos los elementos del DOM
  let parrafo = document.querySelector("#miParrafo");
  let boton = document.querySelector("#cambiarTextoBtn");

  // Evento click del botón
  boton.addEventListener("click", () => {
    // Cambiamos el texto del párrafo
    parrafo.textContent = "El texto ha cambiado correctamente"; // parrafo.innerHTML = "Texto cambiado con <strong>HTML</strong>";

    // Mostramos SweetAlert
    Swal.fire({
      title: "¡Texto actualizado!",
      text: "El contenido del párrafo se ha cambiado correctamente.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  });
});
