import React from 'react'
import Camioneta from '../public/duster.jpg'

const component2 = ({fName, lName, list}) => {

    function Persona(){
         
      return (
        <>
          <h2>Getsai -- Componente nieto</h2>
          <p>Nombre nieto : {fName}</p>
       </>
      )
    }
    

  return (
    
    <div id='principal'>

      <div className='titulo'>
        <h2>DUSTER 2026</h2>
      </div>
      <img src={Camioneta} alt='Duster 2026' />

      <p>Nombre {fName}  Apellido: {lName} <br /></p>
      <div className='lista'>Lista: {list}</div>
      <Persona />
    
    </div>
  )
}

export default component2
 