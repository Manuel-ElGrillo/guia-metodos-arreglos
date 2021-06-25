console.warn("Array.reverse");

//Reverse ordena el array en sentido inverso, donde el último índice ahora será el primero

console.log("Arreglo creado:");
let arregloAinvertir = ["indice 3", "indice 2","indice 1","indice 0"];
console.log(arregloAinvertir);
console.log(" ");

console.log("Con reverse implementado:");
arregloAinvertir.reverse();
console.log(arregloAinvertir);
console.log(" ");

//Ejemplo con diferentes tipos de datos

console.log("Arreglo con diferentes tipos de datos:")
let superArray = ["John Wick", true, ["Un mini array"], {objeto: !false}];
console.log(superArray);
console.log("Con reverse implementado:");
console.log(superArray.reverse());

