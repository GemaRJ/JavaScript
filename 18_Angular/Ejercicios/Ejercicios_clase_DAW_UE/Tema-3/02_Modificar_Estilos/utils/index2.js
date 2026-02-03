document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos elementos del DOM
  let div = document.querySelector("#miDiv");
  let boton = document.querySelector("#cambiarEstiloBtn");

  // Estado para alternar estilos
  let cambiado = false;

  // Evento click
  boton.addEventListener("click", () => {
    if (!cambiado) {
      div.style.backgroundColor = "lightcoral";
      div.style.color = "white";
      div.style.fontSize = "22px";
      div.textContent = "El estilo del div ha cambiado";

      cambiado = true;

      Swal.fire({
        title: "Estilo cambiado",
        text: "El div ahora tiene nuevos estilos",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } else {
      div.style.backgroundColor = "lightblue";
      div.style.color = "black";
      div.style.fontSize = "16px";
      div.textContent = "";

      cambiado = false;

      Swal.fire({
        title: "Estilo restaurado",
        text: "El div ha vuelto a su estilo original",
        icon: "info",
        confirmButtonText: "Aceptar",
      });
    }
  });
});
