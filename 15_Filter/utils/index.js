document.addEventListener("DOMContentLoaded", () => {
  // Clase Producto
  let Producto = class {
    constructor(nombre, precio, categoria, imagen) {
      this.nombre = nombre;
      this.precio = precio;
      this.categoria = categoria;
      this.imagen = imagen;
    }
  };

  // Array inicial de productos
  let productos = [
    new Producto("Camiseta", 100, "ropa", "./utils/img/ropa/camiseta.png"),
    new Producto("Pantalón", 200, "ropa", "./utils/img/ropa/pantalon.png"),
    new Producto(
      "Móvil",
      300,
      "tecnologia",
      "./utils/img/tecnologia/movil.png"
    ),
    new Producto(
      "Tablet",
      400,
      "tecnologia",
      "./utils/img/tecnologia/tablet.png"
    ),
    new Producto("Bebida", 10, "alimentos", "./utils/img/alimentos/bebida.png"),
    new Producto("Comida", 20, "alimentos", "./utils/img/alimentos/comida.png"),
  ];

  // DOM
  let divResultados = document.querySelector("#resultados");
  let selectCategoria = document.querySelector("#select-categoria");

  // Función para representar productos
  let representarProductos = (lista) => {
    divResultados.innerHTML = "";
    lista.forEach((item, index) => {
      divResultados.innerHTML += `
        <div class="col animate__animated animate__fadeInDown">
          <div class="card h-100">
            <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
            <div class="card-body">
              <h5 class="card-title">${item.nombre}</h5>
              <p class="card-text">Precio: ${item.precio} €</p>
              <p class="card-text">Categoría: ${item.categoria}</p>
            </div>
            <div class="card-footer text-center">
              <button class="btn btn-danger btn-sm btnEliminar" data-index="${index}">Eliminar</button>
            </div>
          </div>
        </div>
      `;
    });
  };

  // Mostrar productos iniciales
  representarProductos(productos);

  // Filtrar productos por categoría
  selectCategoria.addEventListener("change", () => {
    let tipo = selectCategoria.value;
    let listaFiltrada =
      tipo !== "todos" && tipo !== ""
        ? productos.filter((p) => p.categoria === tipo)
        : productos;
    representarProductos(listaFiltrada);
  });

  // Eliminar producto
  divResultados.addEventListener("click", (e) => {
    if (e.target.classList.contains("btnEliminar")) {
      let index = e.target.getAttribute("data-index");
      Swal.fire({
        title: "¿Eliminar producto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          productos.splice(index, 1);
          representarProductos(productos);
          Swal.fire("Eliminado", "Producto eliminado correctamente", "success");
        }
      });
    }
  });
});
