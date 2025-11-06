/* 
    Ejercicio 2 - Confirmación de registro

   Enunciado:
   Desarrolla un formulario de registro que solicite nombre, 
   email y edad usando prompt(). 
   Antes de procesar los datos, utiliza confirm() para verificar 
   que el usuario desea continuar. 
   Si confirma, muestra un resumen de los datos con SweetAlert. 
   Si cancela, muestra un mensaje de cancelación.
*/

// Pedimos los datos al usuario
let nombre = prompt("Por favor, ingresa tu nombre:");
let email = prompt("Por favor, ingresa tu email:");
let edad = prompt("Por favor, ingresa tu edad:");

// Confirmamos si desea continuar
let confirmar = confirm("¿Deseas continuar con el registro?");

if (confirmar) {    
  // Si confirma, mostramos los datos con SweetAlert2
  Swal.fire({
    title: " Registro exitoso",
    // text: `Nombre: ${nombre}\nEmail: ${email}\nEdad: ${edad}`, TAMBIÉN SE PUEDE HACER ASÍ. 
    html: `   
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Edad:</strong> ${edad}</p>
    `, 
    icon: "success",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#0d6efd"
  });
} else {    
  // Si cancela, mostramos un mensaje de cancelación
  Swal.fire({
    title: " Registro cancelado",
    text: "No se ha completado el registro.",
    icon: "error",
    confirmButtonText: "Entendido",
    confirmButtonColor: "#dc3545"
  });
}

/* 
  💡 Algunas opciones muy útiles de SweetAlert2

  Ejemplo completo con comentarios explicativos sobre cada opción.


Swal.fire({
  title: "Título principal",            
  // 🏷️ Muestra el texto grande que aparece arriba del cuadro de alerta.

  text: "Texto simple (sin HTML)",      
  // 📝 Muestra texto plano sin formato HTML.

  html: "<b>Texto con HTML</b>",        
  // 🧩 Permite incluir etiquetas HTML y variables dinámicas dentro del cuadro.

  icon: "success",                      
  // 🎯 Define el tipo de icono que se muestra. 
  // Opciones: "success", "error", "warning", "info", "question"

  showCancelButton: true,               
  // 🔘 Si se activa, muestra un botón secundario de “Cancelar”.

  confirmButtonText: "Aceptar",         
  // 🟢 Texto del botón principal (confirmación o acción positiva).

  cancelButtonText: "Cancelar",         
  // 🔴 Texto del botón de cancelación (si está activado showCancelButton).

  confirmButtonColor: "#3085d6",        
  // 🎨 Color del botón principal (por defecto azul).

  cancelButtonColor: "#d33",            
  // 🎨 Color del botón de “Cancelar” (por defecto rojo).

  background: "#fff",                   
  // 🎨 Define el color de fondo de la ventana de alerta.

  color: "#000",                        
  // 🖋️ Cambia el color del texto del cuadro.

  imageUrl: "ruta/imagen.png",          
  // 🖼️ Inserta una imagen personalizada en la parte superior del cuadro.

  imageWidth: 100,                      
  // 📏 Establece el ancho de la imagen (en píxeles).

  imageHeight: 100,                     
  // 📐 Establece la altura de la imagen (en píxeles).

  position: "center",                   
  // 📍 Define la posición de la alerta en pantalla.
  // Opciones: "top", "top-start", "top-end", "center", 
  //           "bottom", "bottom-start", "bottom-end"

  timer: 3000,                          
  // ⏱️ Cierra automáticamente la alerta tras el número de milisegundos indicado (ej: 3000 = 3 seg).

  timerProgressBar: true,               
  // 📊 Muestra una barra de progreso mientras el temporizador está activo.

  showCloseButton: true,                
  // ❌ Muestra un pequeño botón (X) para cerrar la alerta manualmente.

  footer: "<small>Mensaje inferior o aviso</small>"  
  // 📌 Texto o HTML que se muestra en la parte inferior de la alerta.
});

*/