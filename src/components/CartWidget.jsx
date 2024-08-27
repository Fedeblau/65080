import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
  const { mostrarCantidad } = useContext(CartContext)
 
  return (
    <div>🛒
        <span>{mostrarCantidad()}</span>
    </div>
  )
}

export default CartWidget