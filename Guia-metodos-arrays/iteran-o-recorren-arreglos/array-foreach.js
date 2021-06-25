console.warn("Array.forEach");

//forEach va a recorrer los índices del array, devolviéndonos lo que contiene cada uno de estos

let metodos = ["pop", "push", "shift", "unshift", "concat", "spread operator o rest", "join", "split"];
console.log(`Arreglo creado: [${metodos}]`);
console.log(" ");

//A recorrer el arreglo en caso de que no sepamos qué elementos lo conforman

metodos.forEach(metodo => { //forEach recibe como parámetro una función que va a recorrer el arreglo
    console.log(metodo);
});

//Otro punto a tener en cuenta es que el parámetro debe ser el mismo que se quiere imprimir
//En este caso: metodo

console.log(" ");

metodos.forEach(function (m) {
    console.log(m); //Otra forma de mandar a imprimir el contenido del arreglo
});