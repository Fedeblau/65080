import React, { useEffect, useState } from 'react'
import Boton from '../Boton'

const ItemCount = ({id, handleComprar}) => {
    const [ count, setCount] = useState(1)


    const sumar = () =>{
        if(count < 10)
        setCount(count + 1 )
    }
    const restar = () =>{
        if(count > 1 )
        setCount(count - 1 )
    }


  return (
    <div className='container'>
        <Boton texto="-" fn={restar} />
        <span>{count}</span>
        <Boton texto="+" fn={sumar}  />
        <button onClick={()=>handleComprar(count)}>Comprar </button>
    </div>
  )
}

export default ItemCount