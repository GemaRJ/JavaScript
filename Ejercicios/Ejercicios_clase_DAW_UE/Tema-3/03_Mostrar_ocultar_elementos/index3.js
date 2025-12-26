document.addEventListener("DOMContentLoaded", () => {
  let imagen = document.querySelector("#miImagen");
  let boton = document.querySelector("#mostrarOcultar");

  // Estado inicial
  let visible = true;

  boton.addEventListener("click", () => {
    if (visible) {
      imagen.style.display = "none";
      visible = false;

      Swal.fire({
        title: "Imagen oculta",
        text: "La imagen ha sido ocultada.",
        icon: "info",
      });
    } else {
      imagen.style.display = "block";
      visible = true;

      Swal.fire({
        title: "Imagen mostrada",
        text: "La imagen ahora es visible.",
        icon: "success",
      });
    }
  });
});
