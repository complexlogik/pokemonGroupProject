let dataInsert = document.querySelector("ul");

class EdwardElric {
  constructor() {
    this.pokemon = [];
  }
  all() {
    return this.pokemon;
  }
  add(pokemon) {
    this.pokemon.push(pokemon);
  }
  get(name) {
    for (let i = 0; i < this.pokemon.length; i++) {
      if (name === this.pokemon[i].name) {
        return this.pokemon;
      }
    }
  }
}

class Pokemon {
  //   constructor(index, name, hp, attack, defence, spAttack, spDefence, abilites) {
  constructor(name, hp, attack, defence, abilities = []) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defence = defence;
    this.abilities = abilities;
  }
  addAbility(ability) {
    this.abilities.push(ability);
  }
}

//let pokeballs = [];
//need to
// for (let i = 1; i < 949, i++) {
//  pokeballs.push[i];
// }
//
// let pokeballs = [1, 2, 3];

// pokeballs.forEach(index => {
// get(`https://pokeapi.co/api/v2/pokemon/${index}/`).then(response => {
<<<<<<< HEAD
function callPokemon(callback) 
axios
  .all([
    axios.get("https://pokeapi.co/api/v2/pokemon/791/"),
    axios.get("https://pokeapi.co/api/v2/pokemon/405/"),
    axios.get("https://pokeapi.co/api/v2/pokemon/658/")
  ])
  .then(responses => {
    responses.forEach(response => {
      let data = response.data;
=======

let fullMetal = new EdwardElric();

function callAxios(callback) {
  let url1 = "https://pokeapi.co/api/v2/pokemon/791/";
  let url2 = "https://pokeapi.co/api/v2/pokemon/405/";
  let url3 = "https://pokeapi.co/api/v2/pokemon/658/";

  axios
    .all([axios.get(url1), axios.get(url2), axios.get(url3)])
    .then(responses => {
      responses.forEach(response => {
        let data = response.data;

        let pokemon = new Pokemon(
          data.name,
          data.stats[5].base_stat,
          data.stats[4].base_stat,
          data.stats[3].base_stat
        );
        data.abilities.forEach(item => {
          pokemon.addAbility(item.ability.name);
        });
>>>>>>> 335330ec002b4941ec7cdbad71c84fcf4f2b4d52

        fullMetal.add(pokemon);
        // name = this.name;
        // hp = this.hp;
        // attack = this.attack;
        // defence = this.defence;
        // abilites = this.abilites


  dataInsert.innerHTML += `<il> Name: ${pokemon.name}<br> </li><li> HP: ${
    pokemon.hp
  } </li> <li>Attack: ${pokemon.attack} </li> <li>Defence: ${
    pokemon.defence
  } </li> <li>Ability: ${pokemon.ability}</li>`;
      });
      callback(fullMetal);
    });
<<<<<<< HEAD
    callback(fullMetal)
  });
=======
}
>>>>>>> 335330ec002b4941ec7cdbad71c84fcf4f2b4d52

// data.forEach(name => {
//${response.data.forms.name}`)
