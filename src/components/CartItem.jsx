import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({producto}) => {
    const {eliminarProducto} = useContext(CartContext)

  return (
    <div className='prod-card'>
        <h2>{producto.title} </h2>
        <p>{producto.price}</p>
        <p>{producto.cantidad}</p>
        <p>total: {producto.price * producto.cantidad}</p>
        <button onClick={()=>eliminarProducto(producto.id)}> eliminar producto</button>
    </div>
  )
}

export default CartItem