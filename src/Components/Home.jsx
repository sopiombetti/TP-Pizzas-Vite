import React from 'react'
import Card from './Card/Card'

const Home = ({setCart, cart}) => {
  
    let pizzas = [
        { id: 1, tipo: 'Muzzarella', precio: '$1200', img: 'https://enredaccion.com.ar/wp-content/uploads/2023/02/z-muzza-1w.jpg' },
        { id: 2, tipo: 'Fugazza', precio: '$1250', img: 'https://cdn0.recetasgratis.net/es/posts/7/0/2/pizza_fugazza_7207_600.webp' },
        { id: 3, tipo: 'Napolitana', precio: '$1350', img: 'https://img-global.cpcdn.com/recipes/5fb5d55852fa8d06/640x640sq70/photo.webp' },
        { id: 4, tipo: 'Rucula y crudo', precio: '$1500', img: 'https://pizzasargentinas.com/wp-content/uploads/2020/12/rucula-y-jamon-crudo.jpg' },
        { id: 5, tipo: 'Especial', precio: '$1400', img: 'https://saboresmendoza.com/wp-content/uploads/2019/09/pizza.jpg' },
        { id: 6, tipo: 'Hawaiana', precio: '$1500', img: 'https://media-cdn.tripadvisor.com/media/photo-s/03/40/08/5f/bardpizzas.jpg'}
    ]
  
    const homeStyle = {
      marginTop: '40px',
      backgroundColor: 'skyblue',
      width: '80vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }

    return (
      <div style={homeStyle}>
          <h1 >Lista de pizzas</h1>
          {pizzas.map(pizza => <Card cart={cart} setCart={setCart} key={pizza.id} menu={pizza}/>)}
      </div>
    )
  }
  
  export default Home
  