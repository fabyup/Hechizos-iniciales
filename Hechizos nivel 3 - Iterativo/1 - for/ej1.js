const leer = require("prompt-sync")();

/*
 * Ej 1
 * Es crucial que los estudiantes aprendan los nombres de los hechizos
 *  correctamente para realizar magia de manera efectiva. En la clase de
 * Encantamientos, los estudiantes deben demostrar su habilidad para recordar
 *  y lanzar los hechizos correctamente. Ayuda a simular este proceso creando
 *  un programa que solicite al usuario el nombre de un hechizo y le dé un
 * número limitado de intentos para ingresarlo correctamente. Si el usuario
 *  ingresa el nombre del hechizo correctamente, el programa lo felicitará y
 * finalizará. Si el usuario no logra ingresar el hechizo correctamente después
 * de los intentos permitidos, el programa lo informará y finalizará.
 *
 *
 * Por ejemplo: hechizo "Wingardium leviosa", cantidad de intentos maximos 4
 *
 * Extra: permitir que el programa acepte 3 hechizos diferentes
 * 
 * 
 *
  Expecto Patronum
Wingardium Leviosa
Expelliarmus
Avada Kedavra
 */

function main() {
  for (let intentos = 0; intentos < 4; intentos++) {
    console.log("Ingresa el nombre de un hechizo");
            
       let nombreDeHechizos =( leer());
         
         
    if (nombreDeHechizos === "avada kedavra") {
      nombreDeHechizos === "expelliarmus";
      nombreDeHechizos === "wingardium leviosa";
      nombreDeHechizos === "Expecto Patronum";
      console.log("nombre correcto ");
            
    } else {
      console.log("nombre incorrecto");
    }

    {
    }
  }
}
main();
