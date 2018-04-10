let dataInsert = document.querySelector("ul");
//build trainer class & pokemon class

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
  constructor(name, hp, attack, defence,abilities = []) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defence = defence;
    this.abilies = abilities;
  }
  addAbility(ability) {
    this.abilites.push(ability);
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


let fullMetal = new EdwardElric();

axios
  .all([
    axios.get("https://pokeapi.co/api/v2/pokemon/791/"),
    axios.get("https://pokeapi.co/api/v2/pokemon/405/"),
    axios.get("https://pokeapi.co/api/v2/pokemon/658/")
  ])
  .then(responses => {
    responses.forEach(response => {
      let data = response.data;

      let pokemon = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat
      );
      // data.abilites.forEach(item =>{
      //   pokemon.addAbility(item.ability.name)
      // })
 
      fullMetal.add(pokemon);
      name = this.name;
      hp = this.hp;
      attack = this.attack;
      defence = this.defence;
      abilites = this.abilites

      dataInsert.innerHTML += `<il> Name: ${pokemon.name} </li><li> HP: ${
        pokemon.hp
      } </li> <li>Attack: ${pokemon.attack} </li> <li>Defence: ${pokemon.defence} </li> <li>Ability: ${pokemon.abilites}</li>`;
    });
  });

// data.forEach(name => {
//${response.data.forms.name}`)
