console.warn("Array.split");

//Split convierte una cadena de texto o string en un array

console.log("String creado:");
let stringRandom = "Soy un string random a punto de convertirme en arreglo";
console.log(stringRandom);
console.log(" ");

console.log("String con split implementado:")
let stringToArray = stringRandom.split(); //Se debe guardar en una variable nueva el resultado.
console.log(stringToArray);
console.log(" ");

//Si se quiere separar en más de un índice se indica con ( "," )

console.log("%c Una cadena de texto de ejemplo para convertir:", "color:green");
let simulandoStrings = "string1, string2, string3";
console.log(simulandoStrings);
let stringToArray2 = simulandoStrings.split(",");
console.log("El string dividido a 3 índices");
console.log(stringToArray2);
console.log(" ");
