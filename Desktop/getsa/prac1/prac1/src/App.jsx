import Component1 from './Component1'
import Events from './Events'

import './App.css'

function App() {

  const myJson = {
    j1: "Nombre",
    j2: "Apellido",
    j3: "Color",
    status: true,
    sangre: "O+"
  }

  
  if(myJson.status === false){
    return (
      <p>No hay ficha medica</p>
    )
  }


  return (
    <>
     <Component1
     varOne = "variable numero 1"
     varTwo = "variable numero 2"
     varThree = "variable numero 3"
     myJson={myJson}
     />

     <Events/>
    </>
  )
}

export default App
