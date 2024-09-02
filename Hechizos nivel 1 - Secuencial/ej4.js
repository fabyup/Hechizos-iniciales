const leer = require("prompt-sync")();

/**
 * Ej 4 
 * Cálculo del Hechizo Patronus:
 * Solicita al usuario la edad del mago y la cantidad de días de práctica del hechizo Patronus, luego calcula la potencia del hechizo. La potencia se obtiene duplicando la edad sumado a la mitad de todos los días de practica realizados para dominar el Patronus
 * 
 * Por ejemplo si la edad es 25 y los días de practica son 158 entonces su potencia con el hechizo patronus es de 129
 */


function main(magoEdad,diasHechizoPatronus) {
    let edad= 25;
    let diasDePractica=158;
    let potencia= 129;
    
    
    console.log("Ingresa la edad del mago y la cantidad de dias de practicas del hechizo Patronus");
     console.log("La edad del mago es.." +edad);
     console.log("Los dias de practica son..."+ diasDePractica);
     console.log("La potencia es.."+ potencia);
}
    main();


