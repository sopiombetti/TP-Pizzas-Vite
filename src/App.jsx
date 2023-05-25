import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
import Form from './Components/Form'

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <Navbar/>
      <Home cart={cart} setCart={setCart}/>
      <Cart cart={cart}/>
      <Form/>
    </>
  )
}

export default App
