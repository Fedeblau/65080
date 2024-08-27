import './App.css'
import Boton from './components/Boton'
import { Cart }from './components/Cart'
import ItemCount from './components/ItemCount/ItemCount'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartContextProvider } from './context/CartContext'
import Checkout from './components/Checkout'


 

function App() {

  return (
    


    <CartContextProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoryName' element={<ItemListContainer/>} />      
        <Route path='/detalle/:id' element={<ItemDetailContainer/>} />      
        <Route path='/cart' element={<Cart/>} />      
        <Route path='/checkout' element={<Checkout/>} />      
        <Route path='/*' element={<h1>Te perdiste anda pa' alla al home</h1>}/>
      </Routes>
    </BrowserRouter>
    
    </CartContextProvider>
 
  )
}

export default App



