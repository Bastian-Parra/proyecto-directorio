
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navegador from './components/Navegador.jsx'
import Home from './components/Home.jsx'
import Negocios from './components/Negocios.jsx'
import Eventos from './components/Eventos.jsx'
import Lugares from './components/Lugares.jsx'
import './styles/navegador.css'

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
    </div>
  )
}

export default App
