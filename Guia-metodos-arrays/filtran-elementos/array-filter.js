console.warn("Array.filter");

//Filter nos ayuda a filtrar elementos que cumplan una condición
//Para ello debemos generar ese filtro en una nueva variable

const tienda = [
    {producto: "Monitor", precio: 200},
    {producto: "Laptop", precio: 300},
    {producto: "Router", precio: 40},
    {producto: "Cable HDMI", precio: 5},
    {producto: "Tarjeta Madre", precio: 150}
];
console.log("Arreglo generado:");
console.log(tienda);
console.log(" ");

console.log("Aplicando el método filter");
let filtrarProducto = tienda.filter( item => {
    return item.precio > 150;
})

console.log(filtrarProducto);//Imprime los productos que cuesten más de 150
