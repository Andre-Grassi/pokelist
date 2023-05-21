import { useEffect, useRef } from 'react'
import capitalizeFirstLetter from './helpers/capitalizeFirstLetter'
import getPokemonColor from './helpers/grabColor/getPokemonColor'

const Card: React.FC<{
  children: React.ReactNode
  title: string
  img: string
  alt: string
}> = props => {
  const pokemonStats = JSON.parse(props.children as string)
  const imgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    return () => {
      const pokemonColor = getPokemonColor(imgRef.current!)
    }
  }, [props.img])

  return (
    <div className='card container-sm col-12 col-sm-6 col-lg-4'>
      {props.img && (
        <img
          src={props.img}
          alt={props.alt}
          ref={imgRef}
          className='card-img-top w-50 mx-auto border-bottom'
        />
      )}
      <div className='card-body mx-5'>
        <div className='card-title text-center fw-bold'>
          {capitalizeFirstLetter(props.title)}
        </div>
        <div className='card-text text-start'>
          <ul className='list-group '>
            <li className='list-group-item'>HP: {pokemonStats.hp}</li>
            <li className='list-group-item'>Attack: {pokemonStats.attack}</li>
            <li className='list-group-item'>Defense: {pokemonStats.defense}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
