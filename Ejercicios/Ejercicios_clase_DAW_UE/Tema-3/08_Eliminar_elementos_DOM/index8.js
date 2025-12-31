document.addEventListener("DOMContentLoaded", () => {
  // Lista padre (ul)
  let listaDesordenada = document.querySelector("#item-list");

  // Elementos li
  let lista1 = document.querySelector("#lista1");
  let lista2 = document.querySelector("#lista2");
  let lista3 = document.querySelector("#lista3");

  // Botones
  let boton1 = document.querySelector("#btn1");
  let boton2 = document.querySelector("#btn2");
  let boton3 = document.querySelector("#btn3");

  // Elemento 1 → remove()
  boton1.addEventListener("click", () => {
    Swal.fire({
      title: "¿Eliminar elemento?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        lista1.remove(); // método moderno
        Swal.fire("Eliminado", "El elemento ha sido eliminado", "success");
      }
    });
  });

  // Elemento 2 → removeChild()
  boton2.addEventListener("click", () => {
    Swal.fire({
      title: "¿Eliminar elemento?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        listaDesordenada.removeChild(lista2); // usando el padre
        Swal.fire("Eliminado", "El elemento ha sido eliminado", "success");
      }
    });
  });

  // Elemento 3 → removeChild()
  boton3.addEventListener("click", () => {
    Swal.fire({
      title: "¿Eliminar elemento?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        listaDesordenada.removeChild(lista3); // usando el padre
        Swal.fire("Eliminado", "El elemento ha sido eliminado", "success");
      }
    });
  });
});
