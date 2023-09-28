import React from 'react'
import Navegador from './Navegador.jsx'
import imgRight from '../assets/valparaiso.jpg'
import miniImgLeft from '../assets/descarga.png'
import miniImgMid from '../assets/descarga2.png'
import miniImgRight from '../assets/descarga3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faShop, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'

import '../styles/home.css'

const Home = () => {
  return (
    <>
    <ContenedorHeader/>
    <ContenedorAbout/>
    </>
  )
}

function ContenedorHeader() {
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

function ContenedorAbout() {
  return (
    <div className="container-about">
        <h1 className="titulo-about">
        ¿Qué encuentras aquí?
        </h1>
        <p>
          Duis cillum consequat ex voluptate in ex consequat ad adipisicing.
          <br></br>Do ullamco ullamco cillum velit aliqua sunt et <br></br>proident deserunt
          adipisicing eiusmod.
        </p>
        <div className="container-inside-about">
          <div className="minicontainer">
            <FontAwesomeIcon icon={faShop} className="iconos"/>
            <h4>Negocios</h4>
            <p>Laboris et excepteur reprehenderit labore enim ullamco in sunt velit cupidatat qui magna.</p>
          </div>
          <div className="minicontainer">
          <FontAwesomeIcon icon={faCalendarDays} className="iconos"/>
            <h4>Eventos</h4>
            <p>Laboris et excepteur reprehenderit labore enim ullamco in sunt velit cupidatat qui magna.</p>
          </div>
          <div className="minicontainer">
          <FontAwesomeIcon icon={faMapLocationDot} className="iconos"/>
            <h4>Lugares</h4>
            <p>Laboris et excepteur reprehenderit labore enim ullamco in sunt velit cupidatat qui magna.</p>
          </div>

        </div>
    </div>
  )
}

export default Home