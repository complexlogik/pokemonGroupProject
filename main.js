callAxios(function(EdwardElric) {
  console.log(EdwardElric);

  let name1 = document.querySelector(".solname");
  let stats1 = document.querySelector(".solstats");
  let abilities1 = document.querySelector(".solability");
//solgaleo has 1
  name1.innerHTML = EdwardElric.pokemon[0].name;
  stats1.innerHTML =
    "HP: " +
    EdwardElric.pokemon[0].hp +
    ", " +
    "Attack: " +
    EdwardElric.pokemon[0].attack +
    ", " +
    "Defense: " +
    EdwardElric.pokemon[0].defense;
  abilities1.innerHTML =
    "Abilities: " + "[ " + EdwardElric.pokemon[0].abilities + " ]";

  let name2 = document.querySelector(".luxname");
  let stats2 = document.querySelector(".luxstats");
  let abilities2 = document.querySelector(".luxabilites");
//luxray has 3
  name2.innerHTML = EdwardElric.pokemon[1].name;
  stats2.innerHTML =
    "HP: " +
    EdwardElric.pokemon[1].hp +
    ", " +
    "Attack: " +
    EdwardElric.pokemon[1].attack +
    ", " +
    "Defense: " +
    EdwardElric.pokemon[1].defense;
  // abilities2.innerHTML =
  //   "Abilities: " + "[ " + EdwardElric.pokemon[1].abilities + " ]";

  let name3 = document.querySelector(".grename");
  let stats3 = document.querySelector(".grestats");
  let abilities3 = document.querySelector(".greabilities");
//greninja has 2 abilites

name3.innerHTML = EdwardElric.pokemon[2].name;
stats3.innerHTML =
  "HP: " +
  EdwardElric.pokemon[2].hp +
  ", " +
  "Attack: " +
  EdwardElric.pokemon[2].attack +
  ", " +
  "Defense: " +
  EdwardElric.pokemon[2].defense;
abilities3.innerHTML =
  "Abilities: " + "[ " + EdwardElric.pokemon[2].abilities + " ]";
});

callAxios2(function(guyFieri) {
  console.log(guyFieri);

  let name4 = document.querySelector(".hypnoname");
  let stats4 = document.querySelector(".hypnostats");
  let abilities4 = document.querySelector(".hypnoabilities");

  name4.innerHTML = guyFieri.pokemonone[0].name;
  stats4.innerHTML =
    "HP: " +
    guyFieri.pokemonone[0].hp +
    ", " +
    "ATK: " +
    guyFieri.pokemonone[0].attack +
    ", " +
    "Defense: " +
    guyFieri.pokemonone[0].defense;
  abilities4.innerHTML =
    "Abillities: " + "[ " + guyFieri.pokemonone[0].abilities + " ]";

  let name5 = document.querySelector(".slowname");
  let stats5 = document.querySelector(".slowstats");
  let abilities5 = document.querySelector(".slowabilities");

  name5.innerHTML = guyFieri.pokemonone[1].name;
  stats5.innerHTML =
    "HP: " +
    guyFieri.pokemonone[1].hp +
    ", " +
    "Attack: " +
    guyFieri.pokemonone[1].attack +
    ", " +
    "Defense: " +
    guyFieri.pokemonone[1].defense;
  abilities5.innerHTML =
    "Abillities: " + "[ " + guyFieri.pokemonone[1].abilities + " ]";

  let name6 = document.querySelector(".lickname");
  let stats6 = document.querySelector(".lickstats");
  let abilities6 = document.querySelector(".lickabilities");

  name6.innerHTML = guyFieri.pokemonone[2].name;
  stats6.innerHTML =
    "HP: " +
    guyFieri.pokemonone[2].hp +
    ", " +
    "Attack: " +
    guyFieri.pokemonone[2].attack +
    ", " +
    "Defense: " +
    guyFieri.pokemonone[2].defense;
  abilities6.innerHTML =
    "Abillities: " + "[ " + guyFieri.pokemonone[2].abilities + " ]";
});
