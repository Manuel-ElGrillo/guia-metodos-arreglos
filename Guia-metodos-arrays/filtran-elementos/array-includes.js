console.warn("Array.includes");

//EL método includes buscará en el arreglo la coincidencia que se le indique.

const semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sábado", "domingo", "Oswaldo"];
console.log("Arreglo creado:");
console.log(semana);
console.log(" ");

const buscarAOswaldo = semana.includes("Oswaldo");
console.log(buscarAOswaldo);//Retornará true o false si lo indicado se encuentra en el arreglo.
