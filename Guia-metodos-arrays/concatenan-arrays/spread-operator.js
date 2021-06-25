console.warn("Spread Operator");

//El spread operator va a unir los arreglos usando los puntos suspensivos previamente al arreglo

console.log("Arreglos creados:");
let cuerdas = ["violines", "cellos", "contrabajos"];
let vientos = ["trombón", "oboe", "clarinete"];
let teclas = ["piano"];
let coro = ["2 sopranos", "1 tenor"];
console.log( cuerdas, vientos, teclas, coro );
console.log(" ");

console.log("Implementando el spread operator para unir ambos arreglos");
let orquesta = [...cuerdas, ...vientos, ...teclas, ...coro];
console.log(orquesta);