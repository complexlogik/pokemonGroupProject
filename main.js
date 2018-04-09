let dataInsert = document.querySelector("ul");
//build trainer class & pokemon class



class EdwardElric {
  constructor() {
    this.pokemon = [];
  }
  all() {
    return this.pokemon
  }
    add(poke){
        this.pokemon.push(poke)
    }

//   get(name) {
//     for (let i = 0; i < this.pokemon.length; i++) {
//       if (name === this.pokemon[i].name) {
//         return this.pokemon[i];
    //   }
    }



class Pokemon {
//   constructor(index, name, hp, attack, defence, spAttack, spDefence, abilites) {
    constructor(name,hp,attack, defence) {
    // this.index = index;
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defence = defence;
    this.abilities = abilities;

//     this.spAttack = spAttack;
//     this.spDefence = spDefence;
//     this.abilites = [];
//   }
//   addAbility(ability) {
//     this.abilites.push(ability);
  }
}

//let pokeballs = [];
//need to
// for (let i = 1; i < 949, i++) {
//  pokeballs.push[i];
// }
//

let fullMetal = new EdwardElric();

let pokeballs = [1, 2, 3];

pokeballs.forEach(index => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${index}/`).then(response => {
    let data = response.data;


    
    let pokemon = new Pokemon(
     data.name,
     data.stats[5].base_stat,
     data.stats[4].base_stat,
     data.stats[3].base_stat,
     data.abilities[0].ability.name,
		 data.abilities[1].ability.name,
     data.abilities[2].ability.name,
    )
    // let pokemon
    //need to replace pokemon with the way we get the name
    //then add that instead of this
  fullMetal.add(pokemon)
//    name = this.name
//    hp = this.hp
//    attack = this.attack
//    defence = this.defence

    // dataInsert.innerHTML += `<il> ${pokemon.name}`;
  });
});



// data.forEach(name => {
//${response.data.forms.name}`)
