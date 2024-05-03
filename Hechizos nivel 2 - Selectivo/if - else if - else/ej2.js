const leer = require("prompt-sync")();

/**
 * Ej 2
 * Elección de Casa en Hogwarts:
 * Solicita al estudiante su puntuación en un examen y determina a qué casa de Hogwarts pertenecería.
 * Gryffindor - a partir de 90 puntos
 * Hufflepuff - a partir de 70 puntos
 * Ravenclaw - a partir de 50 puntos
 * Slytherin - menos de 50 puntos
 *
 * Por ejemplo si el estudiante saco 100 puntos entonces pertenece a Gryffindor o si sacara 30 entonces pertenece a Slytherin
 */

  function main(Puntuacion) {
  console.log("Podrias decirme cual fue tu puntuacion en el examen por favor");
  let ingresarPuntuacion1 = Number(leer());
  if (ingresarPuntuacion1 >=90) {
    console.log("Pertenece a la casa Gryffindor");
  }else if(ingresarPuntuacion1>=70){
    console.log("pertenece a la casa Hufflepuff");
    }
    else if(ingresarPuntuacion1>=50){
      console.log("Pertenece a la casa Ravenclaw");
    }
    else{
      console.log("Slytherin");
    }
  }

main();


