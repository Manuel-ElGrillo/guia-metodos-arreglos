console.warn("Array.join");

//Join convierte a string un array pero el arreglo debe guardarse en una variable

console.log("Arreglo creado:");
let arrayRandom = [1, false, 9+1, "JavaScript Rules"];
console.log(arrayRandom);
console.log(" ");

arrayRandomAString = arrayRandom.join();
console.log("Arreglo con join implementado");
console.log(arrayRandomAString);
console.log(" ");

console.log("Verificando el tipo de dato del arreglo:")
console.log(typeof(arrayRandomAString));
