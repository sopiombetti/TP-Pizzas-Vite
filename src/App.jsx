import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
import Form from './Components/Form'
import { Routes, Route } from 'react-router-dom'
import Contact from './Components/Contact'

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart}/>}/>
        <Route path='/carrito' element={<Cart cart={cart}/>}/>
        <Route path='/contacto' element={<Contact/>}/>
      </Routes>
      {/* <Home cart={cart} setCart={setCart}/>
      <Cart cart={cart}/> */}
      {/* <Form/> */}
    </>
  )
}

export default App
