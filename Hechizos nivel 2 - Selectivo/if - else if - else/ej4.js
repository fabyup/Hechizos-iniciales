const leer = require("prompt-sync")();

/**
 * Ej 4
 * Verificación de Varita Mágica:
 * Pide al usuario el nivel de lealtad y astucia de una varita mágica y verifica si es adecuada para su uso.
 * A partir de 70 nivel de lealtad o 80 en astucia la varita es apta
 *
 * Por ejemplo si la astucia es 90 y la lealtad es 40 entonces la varita es apta, en otro caso si la astucia es 30 y la lealtad es 60 la varita no es apta
 */

function main() {
  let astucia
  let lealtad
  console.log("Ingresa tu nivel de astucia");
  let niveles = Number(leer());
  console.log("Ingresa tu nivel de lealtad");
    let niveles1=Number(leer())
  if (niveles >= 90) {
    console.log("Es apta");
  } else if (niveles1 >= 40) {
    console.log("Es apta");
  } else if (niveles >= 30) {
    console.log("No es apta");
  } else if (niveles1 >= 60) {
    console.log("No es apta");
  }
}

main();
