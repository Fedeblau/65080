import {createContext, useState} from 'react';


export const CartContext = createContext()

export const CartContextProvider = ( {children} ) =>{
    const [cart, setCart] = useState([])

    const contexto = "otro mensaje"

    const mostrarMensaje = ()=>{
        alert("mensaje desde context")
    }

    const agregarAlCarrito = (producto)=>{
        setCart([...cart, producto])    
    }

    const vaciarCarrito = () =>{
        setCart([])
    }

    const eliminarProducto = (id) => {
        const newCart = cart.filter(e => e.id !== id)
        setCart(newCart)
    }


    const mostrarCantidad = () =>{
        return cart.reduce((acc, curr) => acc + curr.cantidad, 0)
    }
    
    return (
        <CartContext.Provider 
        value={{contexto,
                mostrarMensaje,
                cart,
                setCart, 
                agregarAlCarrito, 
                vaciarCarrito, 
                eliminarProducto, 
                mostrarCantidad }}>
            {children}
        </CartContext.Provider>
    )
}