import React, { useEffect, useState } from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [categorias, setCategorias] = useState([  "electronics",   "men's clothing",   "women's clothing", "jewelery"])




  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategorias(json))
  }, [])

  
  return (
    <nav>
        <Link to="/">
        <h1>Mi tiendita!</h1>
        </Link>
        <ul>
          {
            categorias.length > 0 && categorias.map(e => <Link key={e} to={`/categoria/${e}`}>{e + " "}</Link>)
          }         
        </ul>
        <Link to="/cart">
          <CartWidget />
        </Link>
    </nav>
    
    
  )
}

export default Navbar