import ReactDOM, { useRef } from 'react'
import fetchPokemon from './helpers/fetchPokemon'

const Search: React.FC<{
  onSubmit: (n: any) => void
}> = props => {
  const inputRef = useRef<HTMLInputElement>(null)

  async function fetchPokemonHandler(event: ReactDOM.MouseEvent) {
    event.preventDefault()
    // "await" waits for the function to return and then continue the next lines
    const pokemon = await fetchPokemon(inputRef.current!.value)
    console.log(pokemon)
    props.onSubmit(pokemon)
  }

  return (
    <form>
      <input type='text' ref={inputRef} className='form-control' />
      <button
        type='submit'
        onClick={fetchPokemonHandler}
        className='btn btn-primary'
      >
        Search
      </button>
    </form>
  )
}

export default Search
