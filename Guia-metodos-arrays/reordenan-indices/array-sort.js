console.warn("Array.sort");

//Sort ordena de forma alfabetica un arreglo

console.log("Arreglo creado:");
let unorderedLetters = ["z", "b", "n", "p"];
console.log(unorderedLetters);
console.log(" ");

console.log("Con sort implementado:");
unorderedLetters.sort();
console.log(unorderedLetters);
console.log(" ");

//Las mayúsculas tendrán mayor importancia en este orden

console.log("Otro arreglo de ejemplo:")
let newUnorderedLetters = ["K", "k","A", "a", "L", "l", "F", "f"];
console.log(newUnorderedLetters);
console.log("Con sort implementado:");
console.log(newUnorderedLetters.sort());
console.log(" ");

//En el caso de los números sort los ordenará de manera ascendente PERO solo tomará en cuenta el primer digito

console.log("Arreglo con números:")
let randomNumbers = [10, 9, 6, 2, 3];
console.log(randomNumbers);
console.log("Con sort implementado:");
console.log(randomNumbers.sort());

// Los números tendrán mayor relevancia que las letras
