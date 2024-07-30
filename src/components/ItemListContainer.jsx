import React, { useEffect, useState } from 'react'
import { getProductos } from '../asyncMock'
import Item from './Item/Item'

const ItemListContainer = ( {saludo} ) => {

  const [ productos , setProductos ] = useState([])
  const [ cargando , setCargando ] = useState(true)

  useEffect(()=>{
    // getProductos()
    //   .then((res) => setProductos(res))
    //   .catch()
    //   .finally(()=>setCargando(false))

    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then(data => data.json())
      .then(res => setProductos(res))
      .finally(setCargando(false))
  }, [])
  

  console.log(productos)
  
  if(cargando){
    return(
      <h2>cargando.......</h2>
    )
  }

  return (
    <div>
        {productos.map((el)=> {
          return (
            <Item key={el.id} producto={el}/>  
          )
        })}
    </div>
  )
}

export default ItemListContainer