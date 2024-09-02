const leer = require("prompt-sync")();

/**
 * Ej 2
 * Clase de Encantamientos
 * Para saber el total de ingredientes necesarios en la clase de hoy tenemos que saber el numero de estudiantes y libros a usar
 * Donde podemos saber el total triplicando la cantidad de varitas por estudiante y duplicando la cantidad de libros
 * Los estudiante tiene que traer su propia varita, los que no traigan no podran practicar los encantamientos
 *
 * Por ejemplo si hay 7 varitas y 4 libros a usar los ingredientes necesarios son 29
 */

function main(varitas, libros) {
  7, 4;
  let suma = 4 + 4;
  let multi = 7 * 3;
  let total = multi + suma;
  
  let estudianteTrajoVarita = "si";

  console.log("el total es " + total);

  console.log("trajiste varita");
  respuestaEstudiante = leer();
  if (respuestaEstudiante == estudianteTrajoVarita) {
    console.log("podes practicar");
  } else {
    console.log("no podes practicar");
  }
}

main();
