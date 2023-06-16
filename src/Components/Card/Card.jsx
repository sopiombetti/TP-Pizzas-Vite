import { useState } from 'react'
import cardStyle from './Card.module.css'

const Card = ({menu, setCart, cart}) => {

  const [counter, setCounter] = useState(0)
  
  const {img, tipo, precio} = menu

  const sumar = () => {
    setCounter(counter+1)
  }
  
  const restar = () => {
    setCounter(counter-1)
  }

  const addCart =() => {
    const productoAgregado = {...menu, cantidad: counter}
    setCart([...cart, productoAgregado])
  }


  return (
    <div className={cardStyle.card} >
        <img className={cardStyle.cardImg} src={img} alt="" />
        <h3>{tipo}</h3>
        <h4>{precio}</h4>
        <div style={{display:'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <button disabled={counter === 0} onClick={restar}>-</button>
          <h5 style={{margin: '10px'}}>{counter}</h5> 
          <button onClick={sumar}>+</button>
        </div>
        <button style={{margin: '10px'}} disabled={counter === 0} onClick={addCart}>Agregar al carrito 🛒</button>

    </div>
  )
}

export default Card