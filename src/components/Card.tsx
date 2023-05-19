import { useEffect } from 'react'
import capitalizeFirstLetter from './helpers/capitalizeFirstLetter'

const Card: React.FC<{
  children: React.ReactNode
  title: string
  img: string
  alt: string
}> = props => {
  let pokemonStats = JSON.parse(props.children as string)

  return (
    <div className='card container-sm'>
      {props.img && (
        <img
          src={props.img}
          alt={props.alt}
          className='card-img-top w-25 mx-auto border-bottom'
        />
      )}
      <div className='card-body mx-5'>
        <div className='card-title text-center'>
          {capitalizeFirstLetter(props.title)}
        </div>
        <div className='card-text text-start'>
          <ul>
            <li>HP: {pokemonStats.hp}</li>
            <li>Attack: {pokemonStats.attack}</li>
            <li>Defense: {pokemonStats.defense}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
