console.warn("Array.splice");

//Splice elimina los indices de un arreglo según se le indique dentro de los parentesis ()

console.log("Arreglo creado:");
let indicesEnOrden = [0,1,2,3,4,5,6,7,8,9];
console.log(indicesEnOrden);
console.log(" ");

indicesEnOrden.splice(0,4); //Se eliminaron los índices del 0 al 4
console.log("Arreglo con splice implementado:");
console.log(indicesEnOrden);