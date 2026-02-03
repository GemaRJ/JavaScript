document.addEventListener("DOMContentLoaded", () => {
  let inputUrl = document.querySelector("#urlImagen");
  let btnAgregar = document.querySelector("#btnAgregar");
  let galeria = document.querySelector("#galeria");

  btnAgregar.addEventListener("click", () => {
    if (inputUrl.value.trim() === "") {
      Swal.fire("Error", "Introduce una URL válida", "error");
      return;
    }

    let contenedor = document.createElement("div");
    contenedor.className = "col-md-4 text-center";

    let img = document.createElement("img");
    img.src = inputUrl.value;
    img.className = "imagen-galeria";
    img.alt = "Imagen de la galería";

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "btn btn-danger btn-sm";

    btnEliminar.addEventListener("click", () => {
      contenedor.remove();
    });

    contenedor.appendChild(img);
    contenedor.appendChild(btnEliminar);
    galeria.appendChild(contenedor);

    inputUrl.value = "";
    inputUrl.focus();
  });
});
