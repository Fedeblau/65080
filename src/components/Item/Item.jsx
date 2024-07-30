import React, { Children } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const Item = ( props ) => {

  console.log(props)

  const {producto} = props

  const {id, image, title, description, category, rating, price} = producto


  return (
    <div className='prod-card'>
      <h3>{title}</h3>
      <img src={image} alt={`foto del producto ${title}`} height={200} width={200}/>
      <p>{description}</p>
      <p>price</p>
      <p>{props.children}</p>
      <button>Ver detalles</button>
    </div>
    
  )
}

export default Item