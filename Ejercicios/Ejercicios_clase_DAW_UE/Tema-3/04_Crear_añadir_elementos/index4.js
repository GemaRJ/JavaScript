document.addEventListener("DOMContentLoaded", () => {
  let lista = document.querySelector("#miLista");
  let boton = document.querySelector("#agregarElemento");

  boton.addEventListener("click", () => {
    Swal.fire({
      title: "Nuevo elemento",
      input: "text",
      inputPlaceholder: "Escribe el texto",
      showCancelButton: true,
      confirmButtonText: "Agregar",
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        let li = document.createElement("li");
        li.textContent = result.value;
        li.classList.add("list-group-item");
        lista.appendChild(li);
      }
    });
  });
});
