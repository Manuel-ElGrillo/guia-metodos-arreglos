console.warn("Array.findIndex");

//findIndex nos permite saber el índice en el que se encuentra un elemento

const personajes = ["Goku", "Bulma", "Vegueta", "Son Gohan", "Picollo", "Krillin", "Ten Shin Han", "Cell", "Majin Boo", "Mr. Satán"];
console.log("Arreglo creado:");
console.log(personajes);
console.log(" ");

console.log("Aplicando el método findIndex");
let buscarPersonaje = personajes.findIndex(function (personaje) { //Recibe como parámetro una función
    return personaje === "Son Gohan";
});

console.log("Indice del personaje buscado, Son Gohan:")
console.log(buscarPersonaje);