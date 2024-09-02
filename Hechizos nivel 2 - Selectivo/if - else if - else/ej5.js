const leer = require("prompt-sync")();

/**
 * Ej 5
 * Permiso para Visitar Hogsmeade:
 * Pide al estudiante su edad y si tiene permiso de sus padres, y verifica si puede visitar el pueblo de Hogsmeade.
 * Solo a partir de los 13 años, y con permiso de los padres, o 17 años tendra permitido realizar la actividad
 *
 * Por ejemplo si tiene 12 años y con permiso de los padres no le sera permitido, si tiene 14 y no cuenta con permiso de los padres no le sera permitido, en otro caso si tiene 18 puede realizar la actividad
 */

function main() {
  console.log("Ingresa tu edad");
  let edad = Number(leer());
   console.log("Tenes permiso");
    let ingresarPermiso = (leer());

    let permiso = "si";
 
  if ((edad <= 12, ingresarPermiso !== permiso)) {

    console.log("No podes visitar Hogsmeade");

  } else if ((edad >= 13, ingresarPermiso == permiso)) {
    console.log("Podes visitar Hogsmeade");
  }
 
  
}

main();
