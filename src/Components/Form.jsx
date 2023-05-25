import React, { useState } from 'react'

const Form = () => {
  
    const [nombre, setNombre] = useState('')
    const [direccion, setDireccion] = useState('')
    const [show, setShow] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(nombre.length > 3 && direccion.length > 5){
            setShow(true)
        }
    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'coral',
        alignItems: 'center',
        marginTop: '50px',
        boxShadow: '3px 5px 8px #000',
        borderRadius: '10px'
    }
  
    return (
    <div>
        <form style={formStyle} onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input type="text" onChange={(e) => setNombre(e.target.value)}/>
            <label>Direccion: </label>
            <input type="text" onChange={(e) => setDireccion(e.target.value)}/>
            <button style={{margin: '20px'}}>Enviar pedido</button>
        </form>
        {show ?
            <>
                <h3>Gracias por tu pedido, {nombre}</h3>
                <h3>Se está enviando a {direccion}</h3>
            </>
            :
            null
        }
    </div>
  )
}

export default Form