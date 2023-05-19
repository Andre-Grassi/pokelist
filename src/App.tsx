import React, { useState } from 'react'
import logo from './logo.svg'
import PokeInfo from './components/PokeInfo'
import Search from './components/Search'

const App = () => {
  const [pokemon, setPokemon] = useState<any>(null)

  function getPokemon(pokemon: any) {
    setPokemon(pokemon)
  }

  function getPokemonDesc(pokemon: any) {
    const desc = {
      hp: pokemon.stats[0].base_stat,
      attack: pokemon.stats[1].base_stat,
      defense: pokemon.stats[2].base_stat,
    }

    return JSON.stringify(desc)
  }

  return (
    <div className='App'>
      {!pokemon && (
        <header className='display-1 m-5 text-center'>PokeList</header>
      )}
      {pokemon && <header className='h1'>PokeList</header>}
      <main>
        <Search onSubmit={getPokemon} />
        {pokemon && (
          <PokeInfo
            pokemonName={pokemon.name}
            pokemonDesc={getPokemonDesc(pokemon)}
            pokemonImg={pokemon.sprites.front_default}
          />
        )}
      </main>
    </div>
  )
}

export default App
