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

    // Clean the input
    inputRef.current!.value = ''

    // Remove the focus
    inputRef.current!.blur()

    console.log(pokemon)
    props.onSubmit(pokemon)
  }

  return (
    <form className='d-flex justify-content-center gap-3 mx-auto my-2 col-12 col-sm-6 col-lg-4'>
      <input type='text' ref={inputRef} className='form-control w-50' />
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
