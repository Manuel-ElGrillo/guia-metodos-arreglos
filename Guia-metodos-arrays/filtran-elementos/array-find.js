console.warn("Array.find");

//Find nos permite verificar si un elemento especificado se encuentra en el arreglo

let libros = ["El Silmarilion", "1984", "Un arte mortal", "Como el viento en los almendros", "Nunca más Lily Marleen"];
console.log("Arreglo creado:");
console.log(libros);
console.log(" ");

let buscarLibro = libros.find(libro => libro === "1984");  //Recibe como parámetro una función
console.log("Resultado de la búsqueda");
console.log(buscarLibro);//Devuelve el elemento buscado, si no existe retornará undefined
