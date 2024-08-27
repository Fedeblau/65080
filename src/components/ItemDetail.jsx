import React, { useContext } from 'react'
import ItemCount from './ItemCount/ItemCount'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({producto, mostrarSiguiente, mostrarAnterior}) => {

  const {contexto, agregarAlCarrito} = useContext(CartContext)

    const {id, image, title, description, category, rating, price} = producto

    const handleComprar = (count) =>{
      agregarAlCarrito({...producto, cantidad: count})
    }


  return (
    <div className='prod-card'>
    <h3 onClick={()=>setCart(producto)}>{contexto}</h3>
    <h3>{title}</h3>
    <img src={image} alt={`foto del producto ${title}`} height={200} width={200}/>
    <p>{description}</p>
    <p>{price}</p>
    <ItemCount id={id} handleComprar={handleComprar}/>
  </div>
  )
}

export default ItemDetail