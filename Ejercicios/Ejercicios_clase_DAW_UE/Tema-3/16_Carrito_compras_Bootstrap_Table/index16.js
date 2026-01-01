document.addEventListener("DOMContentLoaded", () => {
  let nombreInput = document.querySelector("#nombreProducto");
  let precioInput = document.querySelector("#precioProducto");
  let imagenInput = document.querySelector("#imagenProducto");
  let btnAgregar = document.querySelector("#btnAgregar");

  let cartBody = document.querySelector("#cart-body");
  let totalGeneral = document.querySelector("#total-general");

  let carrito = [];

  // Actualiza la tabla completa
  function renderizarCarrito() {
    cartBody.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, index) => {
      let subtotal = producto.precio * producto.cantidad;
      total += subtotal;

      let fila = document.createElement("tr");

      fila.innerHTML = `
        <td>
          <img src="${producto.imagen}" width="50" />
        </td>
        <td>${producto.nombre}</td>
        <td>${producto.precio.toFixed(2)} €</td>
        <td>
          <div class="input-group input-group-sm">
            <button class="btn btn-outline-secondary" data-index="${index}" data-accion="restar">-</button>
            <input type="text" class="form-control text-center" value="${
              producto.cantidad
            }" disabled>
            <button class="btn btn-outline-secondary" data-index="${index}" data-accion="sumar">+</button>
          </div>
        </td>
        <td>${subtotal.toFixed(2)} €</td>
        <td>
          <button class="btn btn-danger btn-sm" data-index="${index}" data-accion="eliminar">
            Eliminar
          </button>
        </td>
      `;

      cartBody.appendChild(fila);
    });

    totalGeneral.textContent = total.toFixed(2) + " €";
  }

  // Añadir producto
  btnAgregar.addEventListener("click", () => {
    let nombre = nombreInput.value.trim();
    let precio = parseFloat(precioInput.value);
    let imagen = imagenInput.value.trim();

    if (nombre === "" || isNaN(precio) || imagen === "") {
      alert("Completa todos los campos");
      return;
    }

    carrito.push({
      nombre: nombre,
      precio: precio,
      imagen: imagen,
      cantidad: 1,
    });

    renderizarCarrito();

    nombreInput.value = "";
    precioInput.value = "";
    imagenInput.value = "";
  });

  // Delegación de eventos para +, -, eliminar
  cartBody.addEventListener("click", (e) => {
    let index = e.target.dataset.index;
    let accion = e.target.dataset.accion;

    if (accion === "sumar") {
      carrito[index].cantidad++;
    }

    if (accion === "restar") {
      if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
      }
    }

    if (accion === "eliminar") {
      carrito.splice(index, 1);
    }

    renderizarCarrito();
  });
});
