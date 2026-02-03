document.addEventListener("DOMContentLoaded", () => {
  // Selectores de los inputs, botón y contenedores
  let nombreInput = document.querySelector("#product-name");
  let cantidadInput = document.querySelector("#product-quantity");
  let precioInput = document.querySelector("#product-price");
  let btnAdd = document.querySelector("#btnAdd");
  let contenedorProductos = document.querySelector("#products-container");
  let totalSpan = document.querySelector("#total");

  // Variable para almacenar el total de la compra
  let totalCompra = 0;

  // Evento click del botón "Añadir producto"
  btnAdd.addEventListener("click", () => {
    let nombre = nombreInput.value.trim();
    let cantidad = parseInt(cantidadInput.value);
    let precio = parseFloat(precioInput.value);

    // Validación de los campos
    if (
      nombre === "" ||
      isNaN(cantidad) ||
      isNaN(precio) ||
      cantidad <= 0 ||
      precio <= 0
    ) {
      Swal.fire("Error", "Completa todos los campos correctamente", "error");
      return;
    }

    // Calcular subtotal
    let subtotal = cantidad * precio;
    totalCompra += subtotal;

    // Crear la card
    let card = document.createElement("div");
    card.className = "card mb-3 animate__animated animate__fadeIn";

    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">
          Cantidad: ${cantidad}<br>
          Precio: ${precio.toFixed(2)} €<br>
          Subtotal: <strong>${subtotal.toFixed(2)} €</strong>
        </p>
        <button class="btn btn-danger btn-sm">Eliminar</button>
      </div>
    `;

    // Botón eliminar dentro de la card
    let btnEliminar = card.querySelector("button");
    btnEliminar.addEventListener("click", () => {
      card.remove();
      totalCompra -= subtotal;
      totalSpan.textContent = totalCompra.toFixed(2) + " €";
    });

    // Añadir la card al contenedor
    contenedorProductos.appendChild(card);

    // Actualizar el total
    totalSpan.textContent = totalCompra.toFixed(2) + " €";

    // Limpiar formulario
    nombreInput.value = "";
    cantidadInput.value = "";
    precioInput.value = "";
  });
});
