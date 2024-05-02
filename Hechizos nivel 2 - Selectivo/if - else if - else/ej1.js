const leer = require("prompt-sync")();

/**
 * Ej 1
 * Compra de Varitas Mágicas:
 * Solicita al cliente su edad y determina si es lo suficientemente mayor como para comprar una varita mágica.
 * La edad minima para comprar una varita es a partir de los 11 años
 *
 * Por ejemplo si el cliente tiene 14 años si puede comprar, en otro caso si tuviera 9 entonces no
 */

function main(edad) {
  let edad1 = 16;
  console.log("Ingresa tu edad :" + 16);
  if (edad1>=11) {
    console.log("Podes comprar varitas");
  } else {
    console.log("no podes comprar");
  }
}

main(16, 11);
