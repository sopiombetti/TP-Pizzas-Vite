import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [show, setShow] = useState(false)
  const [id, setId] = useState(1)
  const [character, setCharater] = useState([])
  const urlCharacters = "https://rickandmortyapi.com/api/character/1,2,3"
  const singleCharacter = "https://rickandmortyapi.com/api/character/" + id
  
  useEffect(() => {
    axios(singleCharacter).then((response) => {
      console.log(response.data)
      setCharater(response.data)
    })

  }, [id])

  const click1 = () => {
    setId(1)
    setShow(true)
  }
  const click2 = () => {
    setId(2)
    setShow(true)
  }
  const click3 = () => {
    setId(3)
    setShow(true)
  }

  return (
    <div className='contacto'>
      <h2>¿Con quién te gustaría contactarte?</h2>
      <div className='contacto-botones'>
        <button onClick={click1}>Asesor de ventas</button>
        <button onClick={click2}>Asesor técnico</button>
        <button onClick={click3}>Gerente</button>
      </div>
      {show &&
        <section className='character'>
          <h3>{character.name}</h3>
          <img src={character.image}></img>
        </section>
      }
    </div>
  )
}

export default Contact