import React from 'react'
import Camioneta from '../public/duster.jpg'

const component2 = () => {

    function Persona(){
        const Persona = {
            nombre: 'Getsai',
            edad: 18
        }
      return (
        <>
        <ol>
            <li>nombre: {Persona.nombre}</li>
            <li>nombre: {Persona.edad}</li>
        </ol>
       </>
      )
    }
    

  return (
    
    <div id='principal'>

      <div className='titulo'>
        <h2>DUSTER 2026</h2>
      </div>
      <img src={Camioneta} alt='Duster 2026' />

      <Persona />
    
    </div>
  )
}

export default component2
 