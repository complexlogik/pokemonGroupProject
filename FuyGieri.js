let stephenData = document.querySelector("ul")


class FuyGieri {
  constructor() {
    this.pokemonone = [];
  }
  all() {
    return this.pokemonone;
  }
  add(pokemonone) {
    this.pokemonone.push(pokemonone);
  }
  get(name) {
    for (let i = 0; i < this.pokemonone.length; i++) {
      if (name === this.pokemonone[i].name) {
        return this.pokemonone;
      }
    }
  }
}

class PokemonOne {
	constructor(name, hp, attack, defense, abilities=[]) {
		this.name = name;
		this.hp = hp;
		this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;

    }

    // this.moves = moves;

  addAbility(ability){
    this.abilities.push(ability)
  }
}

let guyFieri = new FuyGieri();

// let pokemonone = [97, 199, 108];

// pokemonone.forEach(index => {
//   axios.get(`https://pokeapi.co/api/v2/pokemon/${index}/`).then(response => {
  axios
  .all([
    axios.get("https://pokeapi.co/api/v2/pokemon/97/"),
    axios.get("https://pokeapi.co/api/v2/pokemon/199/"),
    axios.get("https://pokeapi.co/api/v2/pokemon/108/")
  ])
  .then(responses => {
    responses.forEach(response => {
      let data = response.data;

      let pokemonone = new PokemonOne(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        // data.abilities[0].ability.name,
        // data.abilities[1].ability.name,
        // data.abilities[1].ability.name,

      )
      data.abilities.forEach((item) => {
        pokemonone.addAbility(item.ability.name);
      })
    //  data.moves[0].moves.name
   
  

    // pokemonone.addAbility(data.abilities[0].ability.name)
    // pokemonone.addAbility(data.abilities[1].ability.name)
    // pokemonone.addAbility(data.abilities[2].ability.name)

    // let pokemonone
    //need to replace pokemonone with the way we get the name
    //then add that instead of this


//     guyFieri.add(pokemonone);
//   })
//   callback(guyFieri)
// })


    name = this.name;
    hp = this.hp;
    attack = this.attack;
    defense = this.defense;
    abilities = this.abilities;
    

    stephenData.innerHTML += `<il> Name: ${pokemonone.name} HP: ${
      pokemonone.hp
    } Attack: ${pokemonone.attack} Defense: ${pokemonone.defense} Ability: ${pokemonone.abilities}`;
  });
})



/* //    name = this.name
//    hp = this.hp
//    attack = this.attack
//    defence = this.defence

    // dataInsert.innerHTML += `<il> ${pokemonone.name}`;
//   });
// });

// axios.get("https://pokeapi.co/api/v2/pokemonone/97/")
// 	.then((response) => { */
/* // 		let data = response.data
//         let name = data.name
//         let hp = data.stats[5].base_stat
//         let attack = data.stats[4].base.stat
//         let defense = datat.stats[3].base.stat
        

// 		let hypno = new pokemonone()
// 		name.innerHTML = data.name
// 		hp.innerHTML = "HP: " + data.stats[5].base_stat
// 		attack.innerHTML = "ATTACK: " + data.stats[4].base_stat
// 		defense.innerHTML = "DEFENSE: " + data.stats[3].base_stat
// 		ability1.innerHTML = data.abilities[0].ability.name
// 		ability2.innerHTML = data.abilities[1].ability.name
// 		ability3.innerHTML = data.abilities[2].ability.name

// 	})
// 	.catch((error) => { */
// 		console.log(error)
// 	})


// axios.get("https://pokeapi.co/api/v2/pokemonone/199/")
// 	.then((response) => {
// 		let data = response.data
// 		let name = document.querySelector("#name2")
// 		let hp = document.querySelector("#hp2")
// 		let attack = document.querySelector("#attack2")
// 		let defense = document.querySelector("#defense2")
// 		let ability1 = document.querySelector(".ability4")
// 		let ability2 = document.querySelector(".ability5")
// 		let ability3 = document.querySelector(".ability6")

// 		let slowking = new pokemonone()
// 		name.innerHTML = data.name
// 		hp.innerHTML = "HP: " + data.stats[5].base_stat
// 		attack.innerHTML = "ATTACK: " + data.stats[4].base_stat
// 		defense.innerHTML = "DEFENSE: " + data.stats[3].base_stat
// 		ability1.innerHTML = data.abilities[0].ability.name
// 		ability2.innerHTML = data.abilities[1].ability.name
// 		ability3.innerHTML = data.abilities[2].ability.name

// 	})
// 	.catch((error) => {
// 		console.log(error)
// 	})
// axios.get("https://pokeapi.co/api/v2/pokemonone/108/")
// 	.then((response) => {
// 		let data = response.data
// 		let name = document.querySelector("#name3")
// 		let hp = document.querySelector("#hp3")
// 		let attack = document.querySelector("#attack3")
// 		let defense = document.querySelector("#defense3")
// 		let ability1 = document.querySelector(".ability7")
// 		let ability2 = document.querySelector(".ability8")
// 		let ability3 = document.querySelector(".ability9")

// 		let lickitung = new pokemonone()
// 		name.innerHTML = data.name
// 		hp.innerHTML = "HP: " + data.stats[5].base_stat
// 		attack.innerHTML = "ATTACK: " + data.stats[4].base_stat
// 		defense.innerHTML = "DEFENSE: " + data.stats[3].base_stat
// 		ability1.innerHTML = data.abilities[0].ability.name
// 		ability2.innerHTML = data.abilities[1].ability.name
// 		ability3.innerHTML = data.abilities[2].ability.name

// 	})
// 	.catch((error) => {
// 		console.log(error)
// 	})