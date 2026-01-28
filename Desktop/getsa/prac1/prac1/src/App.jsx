import Component1 from './component1'
import './App.css'

function App() {
  const myJson = {
    j1: "Nombre",
    j2: "Apellido",
    j3: "Color"
  }

  return (
    <>
     <Component1
     varOne = "variable numero 1"
     varTwo = "variable numero 2"
     varThree = "variable numero 3"
     myJson={myJson}
     />
    </>
  )
}

export default App
