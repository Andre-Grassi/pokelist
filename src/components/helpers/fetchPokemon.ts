import ReactDOM from 'react'

async function fetchPokemon(pokemonName: string = '') {
  let pokemon: any
  // será que da pra colocar um return dentro do último then e fazer return const pokemon = await fetch(...) [acho que daí nem precisa do await]
  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => {
      return response.json()
    })
    .then(pokemonObj => {
      pokemon = pokemonObj
      console.log(pokemon)
    })

  return pokemon
}

export default fetchPokemon
