import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (
    <div className='navbarStyle' >
        <Link to='/'><h3 className='link'>Home</h3></Link>
        <Link to='/contacto'><h3 className='link'>Contact</h3></Link>
        <Link to='carrito'><h3 className='link'>Carrito</h3></Link>
    </div>
  )
}

export default Navbar