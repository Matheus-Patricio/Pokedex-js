const offset = 0
const limit = 0

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//Setting a Api url, putting a limit and offset

function convertPokeToHtml(pokemon) {
    return `
    <li class="pokemon">
            <span class="number">${pokemon.id}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"  alt="${pokemon.name}">
            </div>
            
        </li>

    `
}

const pokemonList = document.getElementById('pokemonList')

fetch(url)
    .then((response) => response.json())
        //Json corverting and return a promise
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
        for (let a = 0 ; a < pokemons.length; a++) {
            const pokemon = pokemons[a]
            pokemonList.innerHTML = convertPokeToHtml(pokemon)
            
        }
    })

    .catch((error) => console.log(error))
//return a promise
//when a api query, 