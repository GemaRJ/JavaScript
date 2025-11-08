/* 
Comparación de fechas: Realiza un programa que pida por prompt el día, mes y año de tu cumpleaños.
Indica cuantos días han pasado desde tu cumpleaños hasta el día de hoy

*/
let dia = parseInt(prompt("Introduce el día de tu cumpleaños (número):"));
let mes = parseInt(prompt("Introduce el mes de tu cumpleaños (número):"));
let año = parseInt(prompt("Introduce el año de tu cumpleaños (número):"));

// Crear la fecha de nacimiento
let fechaNacimiento = new Date(año, mes - 1, dia); // Mes -1 porque JavaScript cuenta de 0 a 11
let fechaActual = new Date();    

// Calcular diferencia en milisegundos y convertir a días
let diferenciaTiempo = fechaActual - fechaNacimiento; 
let diferenciaDias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24)); 

// Mostrar resultado con SweetAlert2
Swal.fire({
    title: '¡Datos registrados!',
    html: `
      <p>Han pasado <strong>${diferenciaDias}</strong> días desde tu cumpleaños hasta hoy.</p>
    `,
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#0d6efd'
});
