async function fetchPokemon(pokemonName: string = '') {
  // será que da pra colocar um return dentro do último then e fazer return const pokemon = await fetch(...) [acho que daí nem precisa do await]
  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => {
      return response.json()
    })
    .then(pokemonObj => {
      console.log(pokemonObj)
      return pokemonObj
    })
}

export default fetchPokemon
