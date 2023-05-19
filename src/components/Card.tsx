const Card: React.FC<{
  children: React.ReactNode
  title: string
  img: string
  alt: string
}> = props => {
  return (
    <div className='card'>
      {props.img && (
        <img src={props.img} alt={props.alt} className='card-img-top' />
      )}
      <div className='card-body'>
        <div className='card-title'>{props.title}</div>
        <p className='card-text'>{props.children}</p>
      </div>
    </div>
  )
}

export default Card
