import React, { useState } from 'react'
import logo from './logo.svg'
import PokeInfo from './components/PokeInfo'
import Search from './components/Search'

const App = () => {
  const [pokemon, setPokemon] = useState<any>(null)

  function getPokemon(pokemon: any) {
    setPokemon(pokemon)
  }

  return (
    <div className="App">
      <header className="display-1">PokeList</header>
      <main>
        <Search onSubmit={getPokemon} />
        {pokemon && (
          <PokeInfo
            pokemonName={pokemon.name}
            pokemonDesc="dummy"
            pokemonImg="dummy"
          />
        )}
      </main>
    </div>
  )
}

export default App
