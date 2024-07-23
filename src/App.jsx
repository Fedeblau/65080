import './App.css'
import Boton from './components/Boton'
import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'


function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer saludo={"hola coder"}/>

    </>
  )
}

export default App



