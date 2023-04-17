import { useEffect } from 'react'
import Card from './Card'

const PokeInfo: React.FC<{
  pokemonName: string
  pokemonImg: string
  pokemonDesc: string
}> = (props) => {
  return (
    <Card
      img={props.pokemonImg}
      title={props.pokemonName}
      alt={props.pokemonName}
    >
      {props.pokemonDesc}
    </Card>
  )
}

export default PokeInfo
