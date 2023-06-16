import React from 'react'
import Form from './Form'

const Cart = ({cart}) => {
  
  const cartStyle = {
    backgroundColor: 'pink',
    marginTop: '50px',
    boxShadow: '3px 5px 8px #000',
    borderRadius: '10px'

  }

    return (
    <>
      <div className='cartStyle'>
        <h3>Carrito de compras:</h3>
        {cart.map((item, index) => <li key={index}>{item.tipo} - cantidad: {item.cantidad}</li>)}
      </div>
      <Form/>
    </>
  )
}

export default Cart