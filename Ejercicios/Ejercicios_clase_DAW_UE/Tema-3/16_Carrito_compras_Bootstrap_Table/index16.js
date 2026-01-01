document.addEventListener("DOMContentLoaded", () => {
  // SELECTORES DEL FORMULARIO======

  // Input donde se escribe el nombre del producto
  let nombreInput = document.querySelector("#nombreProducto");

  // Input donde se escribe el precio del producto
  let precioInput = document.querySelector("#precioProducto");

  // Input donde se escribe la URL de la imagen
  let imagenInput = document.querySelector("#imagenProducto");

  // Botón para añadir el producto al carrito
  let btnAgregar = document.querySelector("#btnAgregar");

  // SELECTORES DE LA TABLA

  // Cuerpo de la tabla donde se añadirán las filas dinámicamente
  let cartBody = document.querySelector("#cart-body");

  // Elemento donde se muestra el total general
  let totalGeneral = document.querySelector("#total-general");

  // VARIABLES

  // Array que almacenará todos los productos del carrito
  let carrito = [];

  // FUNCIÓN PARA DIBUJAR EL CARRITO EN LA TABLA
  function renderizarCarrito() {
    // Limpia la tabla antes de volver a pintarla
    cartBody.innerHTML = "";

    // Variable para calcular el total general
    let total = 0;

    // Recorre todos los productos del carrito
    carrito.forEach((producto, index) => {
      // Calcula el subtotal del producto (precio × cantidad)
      let subtotal = producto.precio * producto.cantidad;

      // Suma el subtotal al total general
      total += subtotal;

      // Crea una fila de la tabla
      let fila = document.createElement("tr");

      // Contenido HTML de la fila
      fila.innerHTML = `
        <td>
          <img src="${producto.imagen}" width="50" />
        </td>
        <td>${producto.nombre}</td>
        <td>${producto.precio.toFixed(2)} €</td>
        <td>
          <!-- input-group de Bootstrap para los botones + y - -->
          <div class="input-group input-group-sm">
            <button class="btn btn-outline-secondary" 
              data-index="${index}" data-accion="restar">-</button>

            <input type="text" class="form-control text-center" 
              value="${producto.cantidad}" disabled>

            <button class="btn btn-outline-secondary" 
              data-index="${index}" data-accion="sumar">+</button>
          </div>
        </td>
        <td>${subtotal.toFixed(2)} €</td>
        <td>
          <button class="btn btn-danger btn-sm" 
            data-index="${index}" data-accion="eliminar">
            Eliminar
          </button>
        </td>
      `;

      // Añade la fila a la tabla
      cartBody.appendChild(fila);
    });

    // Muestra el total general actualizado
    totalGeneral.textContent = total.toFixed(2) + " €";
  }

  // EVENTO PARA AÑADIR PRODUCTO
  btnAgregar.addEventListener("click", () => {
    // Obtiene los valores de los inputs
    let nombre = nombreInput.value.trim();
    let precio = parseFloat(precioInput.value);
    let imagen = imagenInput.value.trim();

    // Validación de campos
    if (nombre === "" || isNaN(precio) || imagen === "") {
      alert("Completa todos los campos");
      return;
    }

    // Añade el producto al carrito
    carrito.push({
      nombre: nombre,
      precio: precio,
      imagen: imagen,
      cantidad: 1, // Empieza siempre con cantidad 1
    });

    // Actualiza la tabla
    renderizarCarrito();

    // Limpia los inputs
    nombreInput.value = "";
    precioInput.value = "";
    imagenInput.value = "";
  });

  // EVENTOS DE LOS BOTONES +, -, ELIMINAR DE CADA PRODUCTO
  // Usamos delegación de eventos porque los botones se crean dinámicamente
  cartBody.addEventListener("click", (e) => {
    // Índice del producto en el array
    let index = e.target.dataset.index;

    // Acción del botón pulsado
    let accion = e.target.dataset.accion;

    // Aumentar cantidad
    if (accion === "sumar") {
      carrito[index].cantidad++;
    }

    // Disminuir cantidad (mínimo 1)
    if (accion === "restar") {
      if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
      }
    }

    // Eliminar producto del carrito
    if (accion === "eliminar") {
      carrito.splice(index, 1);
    }

    // Vuelve a dibujar la tabla con los cambios
    renderizarCarrito();
  });
});
