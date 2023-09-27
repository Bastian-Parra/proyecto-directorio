
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navegador from './components/Navegador.jsx'
import Home from './components/Home.jsx'
import Negocios from './components/Negocios.jsx'
import Eventos from './components/Eventos.jsx'
import Lugares from './components/Lugares.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <div className="App">
      <header>
        <Navegador/>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/negocios' element={<Negocios/>}></Route>
        <Route path='/eventos' element={<Eventos/>}></Route>
        <Route path='/lugares' element={<Lugares/>}></Route>
      </Routes>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
