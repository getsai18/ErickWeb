import React from 'react'

const Component1 = ({varOne, varTwo, varThree, myJson}) => {
  function Nieto(){
    return(
        <>
        <h2>DATOS DEL JSON</h2>
            <p>{myJson.j1}</p>
            <p>{myJson.j2}</p>
            <p>{myJson.j3}</p>
            <p>{myJson.status}</p>
            <p>Tipo sangre: {myJson.sangre ? myJson.sangre: "No hay tipo de snagre"}</p>
        </>
    )
  }
  

  

  return (
    <div>
        <div>
            <h1>PRACTICA 1</h1>
        </div>
        <br /><br />
        <h2>Lista del componente 1</h2>
        <ol>
            <li>variable 1 {varOne}</li>
            <li>variable 2 {varTwo}</li>
            <li>variable 3 {varThree}</li>
        </ol>
        <Nieto></Nieto>
    </div>
  )
}

export default Component1
