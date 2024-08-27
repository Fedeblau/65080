import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

export const Cart = () => {


  const { contexto, cart, vaciarCarrito } = useContext(CartContext)

  console.log("Cart en cart", cart[0])

  return (
    <div>
      {
        cart?.map(e => {
          return (
            <CartItem key={e.id} producto={e} />
          )
        })
      }
      {cart.length > 0 ?
        <>
          <button onClick={vaciarCarrito}>vaciar carrito</button>
          <Link to="/checkout" >
            <button >Terminar Compra</button>
          </Link>
        </>
        :
        <Link to="/">
          <h3>Tu carro esta vacio anda a comprar</h3>
        </Link>
      }
    </div>
  )
}

