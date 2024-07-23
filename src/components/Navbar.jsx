import React from 'react'
import CartWidget from './CartWidget'


const Navbar = () => {


  return (
    <nav>
        <h1>Mi tiendita!</h1>
        <ul>
            <li><a href="">home</a><a href="">contaco</a><a href="">nosotros </a><a href="">tienda</a></li>
        </ul>
        <CartWidget />
    </nav>
    
    
  )
}

export default Navbar