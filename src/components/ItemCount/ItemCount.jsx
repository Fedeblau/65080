import React, { useState } from 'react'
import Boton from '../Boton'

const ItemCount = () => {
    const [count, setCount] = useState(1)

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
    </div>
  )
}

export default ItemCount