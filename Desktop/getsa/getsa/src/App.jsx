import Toti from './Toti'
import Component2 from './component2'
import Component1 from './component1'
import './App.css'
function App() {
  //const [count, setCount] = useState(0)
  let nombre = "UTEZ";

  const objeto = {
    nombre: "libro",
    tipo: "Desarrollo Web",
  }

  const arreglo = ["texto1", "texto2"];

  const lista = (<ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
  </ul>);

  return (
    <>
     <p>nombre: {objeto.nombre} I like to kiss</p><br />
     <p>tipo: {objeto.tipo}</p><br />
     <p>arrego: {arreglo[0]}</p>
     <p>{lista}</p>
      <Toti>
        ..
      </Toti>
      <Component2
        fName = "Get"
        lName = "Angulo"
        list = {lista}
      />
          
          
      

      <Component1>

      </Component1>
    </>
  
  )
}

export default App; 
