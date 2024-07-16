import React from 'react'
import CartWidget from './CartWidget'


const Navbar = () => {
  return (
    <div>
        <h1>Mi tiendita!</h1>
        <ul>
            <li><a href="">home</a><a href="">contaco</a><a href="">nosotros </a><a href="">tienda</a></li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default Navbar