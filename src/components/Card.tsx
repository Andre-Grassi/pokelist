const Card: React.FC<{
  children: React.ReactNode
  title: string
  img: string
  alt: string
}> = props => {
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
        <div className='card-title text-center'>{props.title}</div>
        <p className='card-text text-start'>{props.children}</p>
      </div>
    </div>
  )
}

export default Card
