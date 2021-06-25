console.warn("Array.map");

//El método map usa la misma sintaxis que el método de forEach

let pokemonTeam = ["Snorlax", "Mismagius", "Lugia", "Swampert", "Arcanine", "Metagross"];
console.log("Arreglo creado:");
console.log(pokemonTeam);
console.log(" ");

//A diferencia de forEach, map es usado para crear un arreglo nuevo

pokemonTeam.map( (pokemon) => {
    console.log(pokemon);
});
console.log(" ");

//Intentando crear un arreglo nuevo con forEach

let newPokemonTeam = pokemonTeam.forEach(pokemon => pokemon);
console.log(newPokemonTeam); //Retorna undefined
console.log(" ");

//Mismo proceso con map

let pokemonTeamWithMap = pokemonTeam.map(pokemon => pokemon);
console.log(pokemonTeamWithMap);//El array es creado