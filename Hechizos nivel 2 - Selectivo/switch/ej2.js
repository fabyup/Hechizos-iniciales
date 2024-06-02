const leer = require("prompt-sync")();

/**
 * Ej 2
 * Elección de Varita Mágica:
 * Pide al estudiante el núcleo de una varita mágica y muestra un mensaje personalizado dependiendo del tipo de núcleo.
 * Fénix - ¡Excelente elección! Las varitas con núcleo de fénix son poderosas y leales.
 * Unicornio - Las varitas con núcleo de unicornio son conocidas por su pureza y fuerza.
 * Dragón - ¡Cuidado! Las varitas con núcleo de dragón son poderosas pero pueden ser temperamentales.
 * Cualquier otro tipo de nucleo - No reconocemos ese tipo de núcleo. Por favor, ingrese un núcleo válido.
 */

function main() {
  let nucleos = leer();

  switch (nucleos) {
    case "fenix":
      console.log("son poderosas");

      break;
    case "unicornio":
      console.log("pureza y fuerza");
      break;
    case "dragon":
      console.log("temperamentales");
      break;

    default:
      console.log("no reconocemos ese tipo de nucleo");
      break;
  }
}

main();
