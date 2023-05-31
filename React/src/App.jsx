import Navbar from "./components/Navbar.jsx"
import "./styles/css.css"
import itemList from "./components/itemList.jsx"

function App() {

  return (
    <div>
    <Navbar />
    <itemList mensaje="Hola Mundo" />
    </div>

  )
}

export default App
