/* EJEMPLO DE PROMESAS:
setTimeout(() => {
  console.log("Ejecución postergada");
}, 2000);

setInterval(() => {
  console.log("Ejecución recurrente");
}, 2000); */

/*
PROMESA MANUAL:
let promesa = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Ejecución postergada");
  }, 2000);
});


*/

// PROMESA PRECARGADA :

// Lo que pasa cuando esta contestación es correcta -> then
// Lo que pasa cuando esta contestación es incorrecta -> cath
// Debe de tener este tratamiendo de manera obligatoria el "then" y "cath"

/* PROMESA EN VERSIÓN EXTENDIDA

fetch("https://dummyjson.com/products")
  .then((response) => {
    // console.log(`Contestación correcta ${response}`);
    return response.json();
    console.log(json);
  })
  .then((response1) => {
    console.log(response1);
  })
  .catch(() => {
    console.log("Contestación incorrecta");
  });
*/

// La contestación es correcta porque el servidor es correcto y ha podido contactar con el y devuelven un json

// PROMESA EN VERSIÓN RESUMIDA. MÁS BREVE QUE LA VERSIÓN ANTERIOR

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((response1) => {
    console.log("Respuesta traducida a json correctamente");
    let products = response1.products;

    // Muestra todos los productos
    products.forEach((element) => {
      console.log(element.title);
    });

    // Filtrar productos que valgan menos de 100 $
    let filtrada = products.filter((element) => element.price < 100);
    filtrada.forEach((element) => {
      console.log(`${element.title} ${element.price}$`);
    });
  })
  .catch(() => {
    console.log("Contestación incorrecta");
  })
  .finally(() => {
    console.log("Finalizando dependencias de la promesa");
  });

// Finalmente en la siguiente clase, lo representaremos de forma dinámica

// PROMESA MANUALES :

/*let promesa = new Promise((res, rej) => {
  // LÓGICA DE LA PROMESA

  setTimeout(() => {
    let numero = Math.random() * 10;
    // Si el número es mayor que 5 -> resuelta de forma correcta
    // si el número es menor que 5 -> resuelta de forma incorrecta
    if (numero < 5) {
      rej(numero);
    }
  }, 2000);
});

promesa
  .then((resolve) => {
    console.log(`Número calculado con valor $ {resolve}`);
    return resolve.json();
  })
  .then((resolve1) => {
    console.log(response1);
  })
  .catch((error) => {
    console.log(error);
  });
*/
