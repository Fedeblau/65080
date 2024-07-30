import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail"




export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(true)
    const [prodId, setProdId] = useState(3)


    const mostrarSiguiente = () =>{
        setProdId(prodId +1)
    }
    const mostrarAnterior = () =>{
        if(prodId > 0){
            setProdId(prodId - 1)
        }
    }



    useEffect(() => {

        setCargando(true)
        const fetchProducto = async () => {
            try{

                const res = await fetch(`https://fakestoreapi.com/products/${prodId}`)
                const data = await res.json()
                setProducto(data)

            } catch (error){
                setError(error)
            } finally {
                setCargando(false)
            }
        }

        fetchProducto()



        // fetch('https://fakestoreapi.com/products/1')
        // .then(res=>res.json())
        // .then(json=>console.log(json))

    }, [prodId])

    console.log(producto)
    

  return (
    <>
    {
        cargando ? 
        <h3>cargando....</h3>
        :
        <ItemDetail producto={producto} mostrarSiguiente={mostrarSiguiente} mostrarAnterior={mostrarAnterior}/>
    }
    </>
  )
}

