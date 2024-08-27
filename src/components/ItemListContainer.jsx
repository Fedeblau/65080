import React, { useContext, useEffect, useState } from 'react'
import { getProductos, getProductosPorCategoria, productosasync } from '../asyncMock'
import Item from './Item/Item'
import { useParams } from "react-router-dom"
import { CartContext } from '../context/CartContext'
import { db } from '../services/firebaseConfig'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = ({ saludo }) => {

  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  
  const {contexto, mostrarMensaje, cart } = useContext(CartContext)

  const {categoryName} = useParams()


  console.log("CARRITO:",cart)

  useEffect(() => {
    // getProductos()
    //   .then((res) => setProductos(res))
    //   .catch()
    //   .finally(()=>setCargando(false))
    setCargando(true)

    //DESDE API

    // if(categoryName){
    //   fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
    //         .then(res=>res.json())
    //         .then(json=>setProductos(json))
    //         .finally(setCargando(false))
    // }else{
    //   fetch("https://fakestoreapi.com/products")
    //     .then(data => data.json())
    //     .then(res => setProductos(res))
    //     .finally(setCargando(false))
    // }

    //DESDE ASYNCMOCK
    // if (categoryName) {
    //   getProductosPorCategoria(categoryName).then(res => setProductos(res)).finally(setCargando(false))
    // } else {
    //   getProductos().then(res => setProductos(res))
    //     .finally(setCargando(false))
    // }

    //DESDE FIREBASE

    //TODO OPTIMIZACION!!!

    const productosRef = collection(db, "productos") 

    if(categoryName){
      const prodsPorCat = query(productosRef, where("category", "==", categoryName))
      getDocs(prodsPorCat).then(snapshot => {
        const prods = snapshot.docs.map(doc => {
          const data = doc.data()
          return {...data, id: doc.id }
        })
        setProductos(prods)
      }).finally(setCargando(false))
    }else{
      getDocs(productosRef).then(snapshot => {
        console.log("snap",snapshot)
        const prods = snapshot.docs.map(doc => {
          const data = doc.data()
          return {...data, id: doc.id }
        })
        setProductos(prods)
      }).finally(setCargando(false))
    }


  }, [categoryName])

  console.log("PRODuCTOS", productos)


  if (cargando) {
    return (
      <h2>cargando.......</h2>
    )
  }

  return (
    <div>
      <h3 onClick={()=>mostrarMensaje()}>{contexto}</h3>
      {productos.map((el) => {
        console.log("EL ID",el.id)
        return (
          <Item key={el.id} producto={el} />
        )
      })}
    </div>
  )
}

export default ItemListContainer