document.addEventListener("DOMContentLoaded", () => {
  // Definimos la clase producto si no existe
  class Producto {
    constructor(nombre, precio, categoria) {
      this.nombre = nombre;
      this.precio = precio;
      this.categoria = categoria;
    }
  }

  let productos = [
    new Producto("Camiseta", 100, "ropa"),
    new Producto("Pantalón", 200, "ropa"),
    new Producto("Móvil", 100, "tecnología"),
    new Producto("Tablet", 100, "tecnología"),
    new Producto("Bebida", 100, "alimentos"),
    new Producto("Comida", 100, "alimentos"),
  ];

  let select = document.querySelector("#select-tipo");
  let divProductos = document.querySelector("#div-productos");

  // Función para mostrar los productos
  function representarProductos(lista) {
    divProductos.innerHTML = ""; // limpiar div antes de mostrar
    lista.forEach((item) => {
      let imagen = "";
      switch (item.categoria) {
        case "ropa":
          imagen =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3R40s20PTRbJ1LPQUeLu5BUE6h6bvQi7TTg&s";
          break;
        case "alimentos":
          imagen =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlmh5S75ab5kdj2GmHUmMTOXZ5vMYXXi3ww&s";
          break;
        case "tecnología":
          imagen =
            "https://neosystems.es/wp-content/uploads/2021/03/foto-tecno.jpeg";
          break;
        default:
          imagen =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHmuxgLNTRF42x-Sj0nu8msU6-DQ-Gbceh0A&s";
      }

      divProductos.innerHTML += `
        <div class="producto">
          <h3>${item.nombre}</h3>
          <p>Precio: ${item.precio} €</p>
          <p>Categoría: ${item.categoria}</p>
          <img src="${imagen}" alt="${item.categoria}" width="100">
        </div>
      `;
    });
  }

  // Inicializar mostrando todos los productos
  representarProductos(productos);

  // Filtrar productos al cambiar el select
  select.addEventListener("change", () => {
    let tipo = select.value; // ropa, alimentos, tecnología o todos
    let listaFiltrada =
      tipo !== "todos"
        ? productos.filter((item) => item.categoria === tipo)
        : productos;

    representarProductos(listaFiltrada);
    console.log("El resultado del filtro es:", listaFiltrada);
  });
});
