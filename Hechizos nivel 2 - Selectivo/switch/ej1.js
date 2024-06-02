const leer = require("prompt-sync")();

/**
 * Ej 1
 * Clasificación de Pociones:
 * Solicita al estudiante el nombre de una poción y muestra su nivel de dificultad de acuerdo a su complejidad.
 *
 * Pociones conocidas:
 * Felix Felicis - es extremadamente compleja y peligrosa.
 * Polvo de Flu - es compleja pero útil en la red de transportación.
 * Poción Multijugos - es complicada pero muy útil para transformaciones temporales.
 * Cualquier otro tipo de pocion indicar que: No tenemos información sobre esa poción en nuestros registros.
 *
 */

function main() {
  console.log("Ingresa el nombre de la pocion");

  let Pocion = leer();

  switch (Pocion) {
    case "felix felicis":
      console.log("Es extremadamente compleja y peligrosa");
      break;
    case "polvo de flu":
      console.log("Compleja pero util para transformaciones temporales");
      break;
    case "pocion multijugos":
      console.log("complicada pero muy util para transformaciones temporales");
      break;

    default:
      console.log("No tenemos informacion de esta pocion");
      break;
  }
}

main();
