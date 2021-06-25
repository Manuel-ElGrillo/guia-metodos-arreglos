console.warn("Arrays o Arreglos");

//Arrays o arreglos

//Formas de crearlos

//Forma 1:

console.log("Primera forma de crear arreglos");
let arreglo_1 = new Array ( "índice 0", "índice 1", "índice 2" ); 
console.log(arreglo_1);  
console.log(" ");

//Forma 2:

console.log("Segunda forma de crear arreglos");
let arreglo_2 = ["índice 0", "índice 1", "índice 2"];
console.log(arreglo_2);  
console.log(" ");


//Accediendo a los valores de un arreglo.

//Para ello necesitamos colocar los símbolos [] junto con el número del índice al que queremos acceder.

let tecnologiasFrontEnd = ["HTML", "CSS", "JavaScript"];
console.log(tecnologiasFrontEnd);
console.log( tecnologiasFrontEnd[2] ); //Se imprime el índice 2: JavaScript
console.log(" ");


//Los arreglos pueden recibir diferentes tipos de datos. Por ejemplo:

let arregloConMuchosTiposDeDatos = [
    true,
    1000,
    "Un string random",
    {caracteristica: "Soy un objeto dentro de un arreglo"},
    ["Soy un arreglo dentro de un arreglo", ["Arrayception"]],
    funcionDentroDeUnArreglo = () => {},
    2 + 2
];
console.log(arregloConMuchosTiposDeDatos);

//Ahora te invito a que explores los diferentes métodos que están en las carpetas :)