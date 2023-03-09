import ReactDOM, { useRef } from 'react'
import usePokemonFinder from '../hooks/usePokemonFinder'

const Search: React.FC<{
  onSubmit: (n: any) => void
}> = props => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [pokemon, fetchPokemon] = usePokemonFinder()

  const fetchPokemonHandler = (event: ReactDOM.MouseEvent) => {
    fetchPokemon(event, inputRef)
    console.log(pokemon)
  }

  return (
    <form>
      <input type="text" ref={inputRef} className="form-control" />
      <button
        type="submit"
        onClick={fetchPokemonHandler}
        className="btn btn-primary"
      >
        Search
      </button>
    </form>
  )
}

export default Search
