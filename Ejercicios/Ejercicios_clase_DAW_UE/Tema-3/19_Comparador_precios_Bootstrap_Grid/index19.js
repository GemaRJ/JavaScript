document.addEventListener("DOMContentLoaded", function () {
  let formProducto = document.querySelector("#formProducto");
  let nombreInput = document.querySelector("#nombreProducto");
  let precio1Input = document.querySelector("#precioTienda1");
  let precio2Input = document.querySelector("#precioTienda2");
  let precio3Input = document.querySelector("#precioTienda3");
  let contenedorProductos = document.querySelector("#contenedorProductos");
  let btnOrdenNombre = document.querySelector("#ordenNombre");
  let btnOrdenPrecio = document.querySelector("#ordenPrecio");

  let productos = [];

  // Generar un id único para cada producto
  function generarId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }

  // Función para renderizar los productos
  function renderProductos() {
    contenedorProductos.innerHTML = "";

    productos.forEach((producto) => {
      let precios = [producto.precio1, producto.precio2, producto.precio3];
      let mejorPrecio = Math.min(...precios);

      let card = document.createElement("div");
      card.className = "col-md-4 mb-3";
      card.innerHTML = `
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">
              Tienda 1: €${producto.precio1.toFixed(2)}<br>
              Tienda 2: €${producto.precio2.toFixed(2)}<br>
              Tienda 3: €${producto.precio3.toFixed(2)}
            </p>
            <span class="badge bg-success">Mejor: €${mejorPrecio.toFixed(
              2
            )}</span>
            <button class="btn btn-danger btn-sm mt-2" data-id="${
              producto.id
            }">Eliminar</button>
          </div>
        </div>
      `;
      contenedorProductos.appendChild(card);

      // Botón eliminar
      let btnEliminar = card.querySelector("button");
      btnEliminar.addEventListener("click", () => {
        productos = productos.filter((p) => p.id !== producto.id);
        renderProductos();
      });
    });
  }

  // Añadir producto
  formProducto.addEventListener("submit", function (e) {
    e.preventDefault();

    let nombre = nombreInput.value.trim();
    let precio1 = parseFloat(precio1Input.value);
    let precio2 = parseFloat(precio2Input.value);
    let precio3 = parseFloat(precio3Input.value);

    if (!nombre || isNaN(precio1) || isNaN(precio2) || isNaN(precio3)) {
      Swal.fire("Error", "Completa todos los campos correctamente", "error");
      return;
    }

    productos.push({ id: generarId(), nombre, precio1, precio2, precio3 });

    nombreInput.value = "";
    precio1Input.value = "";
    precio2Input.value = "";
    precio3Input.value = "";

    renderProductos();
  });

  // Ordenar por nombre
  btnOrdenNombre.addEventListener("click", () => {
    productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    renderProductos();
  });

  // Ordenar por mejor precio
  btnOrdenPrecio.addEventListener("click", () => {
    productos.sort((a, b) => {
      let mejorA = Math.min(a.precio1, a.precio2, a.precio3);
      let mejorB = Math.min(b.precio1, b.precio2, b.precio3);
      return mejorA - mejorB;
    });
    renderProductos();
  });
});
