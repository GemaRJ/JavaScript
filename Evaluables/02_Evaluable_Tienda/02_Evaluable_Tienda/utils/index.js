/* ======================
   VARIABLES GLOBALES
====================== */
let API_URL = "https://dummyjson.com/products";

let contenedorProductos = document.getElementById("contenedorProductos");
let listaCarrito = document.getElementById("listaCarrito");
let totalCarrito = document.getElementById("totalCarrito");
let filtroCategoria = document.getElementById("filtroCategoria");
let btnAplicarFiltro = document.getElementById("aplicarFiltro");
let btnComprar = document.getElementById("btnComprar");

let productos = [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/* ======================
   CARGAR PRODUCTOS
====================== */
async function cargarProductos() {
  if (!contenedorProductos) return;

  let response = await fetch(API_URL);
  let data = await response.json();
  productos = data.products;
  mostrarProductos(productos);
}

/* ======================
   MOSTRAR PRODUCTOS
====================== */
function mostrarProductos(lista) {
  contenedorProductos.innerHTML = "";

  lista.forEach(function (producto) {
    let col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
      <div class="card h-100 animate__animated animate__fadeIn">
        <img src="${producto.thumbnail}" class="card-img-top">
        <div class="card-body">
          <h5>${producto.title}</h5>
          <p>Categoría: ${producto.category}</p>
          <p>Marca: ${producto.brand || "Sin marca"}</p>
          <p class="fw-bold">€${producto.price}</p>
          <button class="btn btn-primary w-100">
            Añadir a carrito
          </button>
        </div>
      </div>
    `;

    col.querySelector("button").onclick = function () {
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert("Producto añadido al carrito");
    };

    contenedorProductos.appendChild(col);
  });
}

/* ======================
   FILTROS
====================== */
if (btnAplicarFiltro) {
  btnAplicarFiltro.onclick = function () {
    let tipo = filtroCategoria.value;
    let filtrados = productos;

    if (tipo === "todas") {
      mostrarProductos(productos);
      return;
    }

    if (tipo === "Precio mínimo") {
      let precio = prompt("Introduce el precio mínimo");

      if (precio === null || precio === "") {
        mostrarProductos(productos);
        return;
      }

      precio = Number(precio);
      filtrados = productos.filter(function (p) {
        return p.price >= precio;
      });
    }

    if (tipo === "Categoría") {
      let categoria = prompt(
        "Introduce la categoría (ej: smartphones, laptops, skincare)"
      );

      if (!categoria) {
        mostrarProductos(productos);
        return;
      }

      filtrados = productos.filter(function (p) {
        return p.category.toLowerCase().includes(categoria.toLowerCase());
      });
    }

    if (tipo === "Marca") {
      let marca = prompt("Introduce la marca (ej: Apple, Samsung, HP)");

      if (!marca) {
        mostrarProductos(productos);
        return;
      }

      filtrados = productos.filter(function (p) {
        return p.brand && p.brand.toLowerCase().includes(marca.toLowerCase());
      });
    }

    mostrarProductos(filtrados);
  };
}

/* ======================
   MOSTRAR CARRITO
====================== */
function mostrarCarrito() {
  if (!listaCarrito) return;

  listaCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach(function (producto, index) {
    total += producto.price;

    let li = document.createElement("li");
    li.className =
      "list-group-item d-flex align-items-center justify-content-between";

    // Imagen pequeña
    let img = document.createElement("img");
    img.src = producto.thumbnail;
    img.alt = producto.title;
    img.style.height = "50px";
    img.style.marginRight = "10px";

    // Contenedor texto
    let div = document.createElement("div");
    div.style.flex = "1"; // ocupa el espacio restante
    div.innerHTML = `<strong>${producto.title}</strong><br>€${producto.price}`;

    // Botón eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.className = "btn btn-sm btn-danger ms-2";
    btnEliminar.textContent = "Eliminar";

    // Evento eliminar
    btnEliminar.onclick = function () {
      carrito.splice(index, 1); // elimina el producto del array
      localStorage.setItem("carrito", JSON.stringify(carrito));
      mostrarCarrito(); // actualiza la lista en pantalla
    };

    li.appendChild(img);
    li.appendChild(div);
    li.appendChild(btnEliminar);

    listaCarrito.appendChild(li);
  });

  totalCarrito.textContent = total.toFixed(2);
}

/* ======================
   COMPRAR
====================== */
if (btnComprar) {
  mostrarCarrito();

  btnComprar.onclick = function () {
    Swal.fire({
      title: "Confirmar compra",
      text:
        "Vas a realizar una compra por valor de €" +
        totalCarrito.textContent +
        ". ¿Estás seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then(function (result) {
      if (result.isConfirmed) {
        carrito = [];
        localStorage.removeItem("carrito");
        mostrarCarrito();

        Swal.fire("Compra realizada", "Gracias por tu compra", "success");
      }
    });
  };
}

/* ======================
   INICIO
====================== */
cargarProductos();
