import React from 'react'
import Navegador from './Navegador.jsx'
import imgRight from '../assets/valparaiso.jpg'
import '../styles/home.css'

const Home = () => {
  return (
    <Contenido/>
  )
}

function Contenido() {
  return (
    <div className="container">
      <div className="container-left">
          <h1>Directorio de Negocios</h1>
          <h3>A tu disposición.</h3>
          <p>
             Veniam do quis adipisicing nostrud. 
             Minim enim velit dolor labore excepteur veniam voluptate
             ipsum dolore qui ut adipisicing fugiat labore. Nulla deserunt cupidatat nisi 
             consectetur eiusmod anim velit nisi.
          </p>
          <div className="container-buttons">
            <a id="btn-verMas" href="/">Ver más</a>
            <a id="btn-registro"href="/">Regístrate</a>
          </div>      
      </div>
      <div className="container-right"></div>
    </div>
  )
}

export default Home