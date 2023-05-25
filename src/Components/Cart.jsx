import React from 'react'

const Cart = ({cart}) => {
  
  const cartStyle = {
    backgroundColor: 'pink',
    marginTop: '50px',
    boxShadow: '3px 5px 8px #000',
    borderRadius: '10px'

  }

    return (
    <div style={cartStyle}>
        <h3>Carrito de compras:</h3>
        {cart.map((item, index) => <li key={index}>{item.tipo}</li>)}
    </div>
  )
}

export default Cart