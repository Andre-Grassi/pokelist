import ReactDOM, { useState } from 'react'

const usePokemonFinder = () => {
  const [pokemon, setPokemon] = useState<any>({})
  function fetchPokemon(
    event: ReactDOM.MouseEvent,
    input: ReactDOM.RefObject<HTMLInputElement>
  ) {
    event.preventDefault()
    const pokemonName = input.current!.value

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        return response.json()
      })
      .then(pokemonObj => {
        setPokemon(pokemonObj)
        // console.log(pokemon)
      })
  }

  return [pokemon, fetchPokemon]
}

export default usePokemonFinder
