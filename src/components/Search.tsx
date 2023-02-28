import ReactDOM, { useRef } from 'react'

const Search: React.FC<{
  onSubmit: (n: any) => void
}> = props => {
  const inputRef = useRef<HTMLInputElement>(null)

  function findPokemonHandler(event: ReactDOM.MouseEvent) {
    event.preventDefault()
    findPokemon(inputRef.current!.value)
  }

  function findPokemon(name: string) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => {
        return response.json()
      })
      .then(response => props.onSubmit(response))
  }
  return (
    <form>
      <input type="text" ref={inputRef} className="form-control" />
      <button
        type="submit"
        onClick={findPokemonHandler}
        className="btn btn-primary"
      >
        Search
      </button>
    </form>
  )
}

export default Search
