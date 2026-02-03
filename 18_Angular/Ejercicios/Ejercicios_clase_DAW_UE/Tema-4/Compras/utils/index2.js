document.addEventListener("DOMContentLoaded", function () {
  // Array de productos
  let productos = [
    { id: 1, nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 25, categoria: "Ropa" },
    { id: 3, nombre: "Gorra", precio: 10, categoria: "Accesorios" },
    { id: 4, nombre: "Zapatillas", precio: 50, categoria: "Calzado" },
    { id: 5, nombre: "Mochila", precio: 35, categoria: "Accesorios" },
    { id: 6, nombre: "Sudadera", precio: 40, categoria: "Ropa" },
  ];

  let carrito = [];

  let contenedorProductos = document.querySelector("#contenedorProductos");
  let listaCarrito = document.querySelector("#listaCarrito");
  let totalCarrito = document.querySelector("#totalCarrito");
  let vaciarCarritoBtn = document.querySelector("#vaciarCarrito");
  let filtroCategoria = document.querySelector("#filtroCategoria");

  // Rellenar select de categorías
  let categorias = ["todas", ...new Set(productos.map((p) => p.categoria))];
  categorias.forEach((c) => {
    let option = document.createElement("option");
    option.value = c;
    option.textContent = c;
    filtroCategoria.appendChild(option);
  });

  // Renderizar productos
  function renderProductos(filtro = "todas") {
    contenedorProductos.innerHTML = "";
    let filtrados = productos.filter(
      (p) => filtro === "todas" || p.categoria === filtro
    );
    filtrados.forEach((p) => {
      let div = document.createElement("div");
      div.className = "col-md-4 mb-3";
      div.innerHTML = `
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${p.nombre}</h5>
            <p class="card-text">Precio: €${p.precio.toFixed(2)}</p>
            <p class="card-text">Categoría: ${p.categoria}</p>
            <button class="btn btn-primary w-100 añadir" data-id="${
              p.id
            }">Añadir al carrito</button>
          </div>
        </div>
      `;
      contenedorProductos.appendChild(div);

      // Evento añadir al carrito
      let btnAñadir = div.querySelector(".añadir");
      btnAñadir.addEventListener("click", () => añadirAlCarrito(p.id));
    });
  }

  // Añadir producto al carrito
  function añadirAlCarrito(idProducto) {
    let producto = productos.find((p) => p.id === idProducto);
    let item = carrito.find((i) => i.id === idProducto);

    if (item) {
      item.cantidad++;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }

    renderCarrito();
    Swal.fire({
      icon: "success",
      title: "Añadido",
      text: `${producto.nombre} ha sido añadido al carrito`,
      timer: 1500,
      showConfirmButton: false,
    });
  }

  // Renderizar carrito
  function renderCarrito() {
    listaCarrito.innerHTML = "";
    carrito.forEach((item) => {
      let li = document.createElement("li");
      li.className =
        "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `
        ${item.nombre} - €${item.precio.toFixed(2)} x ${item.cantidad}
        <button class="btn btn-sm btn-danger eliminar" data-id="${
          item.id
        }">Eliminar</button>
      `;
      listaCarrito.appendChild(li);

      // Botón eliminar
      li.querySelector(".eliminar").addEventListener("click", () =>
        eliminarDelCarrito(item.id)
      );
    });
    calcularTotal();
  }

  // Calcular total
  function calcularTotal() {
    let total = carrito.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
    totalCarrito.textContent = total.toFixed(2);

    // Mensaje opcional si supera 100€
    if (total > 100) {
      Swal.fire({
        icon: "info",
        title: "Envío gratis",
        text: "Tu compra supera los 100€, ¡el envío es gratis!",
      });
    }
  }

  // Eliminar del carrito
  function eliminarDelCarrito(idProducto) {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Quieres eliminar este producto del carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        carrito = carrito.filter((item) => item.id !== idProducto);
        renderCarrito();
        Swal.fire("Eliminado", "El producto ha sido eliminado", "success");
      }
    });
  }

  // Vaciar carrito
  vaciarCarritoBtn.addEventListener("click", () => {
    Swal.fire({
      title: "¿Vaciar carrito?",
      text: "Se eliminarán todos los productos del carrito",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        carrito = [];
        renderCarrito();
        Swal.fire("Vaciado", "El carrito ha sido vaciado", "success");
      }
    });
  });

  // Filtrar productos
  filtroCategoria.addEventListener("change", () => {
    renderProductos(filtroCategoria.value);
  });

  // Inicializar
  renderProductos();
  renderCarrito();
});
