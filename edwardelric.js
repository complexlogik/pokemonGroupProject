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
        return this.pokemon[i];
      }
    }
  }
}

class Pokemon {
  constructor(name, hp, attack, defense, abilities = []) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
  addAbility(ability) {
    this.abilities.push(ability);
  }
}

//let pokeballs = [];
//how to get them all!!!
// for (let i = 1; i < 949, i++) {
//  pokeballs.push[i];
// }
//
// let pokeballs = [1, 2, 3];

// pokeballs.forEach(index => {
// get(`https://pokeapi.co/api/v2/pokemon/${index}/`).then(response => {

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
          data.stats[3].base_stat,
        );
          data.abilities.forEach(item => {
            pokemon.addAbility(item.ability.name);
          });

        fullMetal.add(pokemon);
      });
      callback(fullMetal);
    });
}
