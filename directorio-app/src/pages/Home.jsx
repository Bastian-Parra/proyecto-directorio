import React from 'react'
import Navegador from '../components/Navegador.jsx'
import imgRight from '../assets/valparaiso.jpg'
import imgContenedor_1 from '../assets/descarga.png'
import imgContenedor_2 from '../assets/descarga2.png'
import imgContenedor_3 from '../assets/descarga3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faShop, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const parrafoHeader = "Bienvenido al Directorio de Negocios, tu fuente confiable para descubrir y conectar con una amplia variedad de empresas locales. Nuestra plataforma te ofrece acceso a una vasta red de emprendedores y compañías, desde restaurantes y tiendas minoristas hasta servicios profesionales y más. Explora, encuentra y apoya a las empresas de tu comunidad mientras descubres ofertas exclusivas y valiosa información sobre productos y servicios."

import '../styles/home.css'

const Home = () => {
  return (
    <>
    <ContenedorHeader/>
    <ContenedorAbout/>
    <ContenedorRecomendaciones/>
    </>
  )
}

function ContenedorHeader() {
  return (
    <div className="container">
      <div className="container-left">
          <h1>Directorio de Negocios</h1>
          <h3>A tu disposición</h3>
          <p>
            {parrafoHeader}
          </p>
          <div className="container-buttons">
            <a id="btn-verMas" href="/">Ver más</a>
            <Link id="btn-registro" to="/register" >Regístrate</Link>
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

function ContenedorRecomendaciones() {
  return (
    <div className="container-recomendations">
      <h1 className="titulo-about">
        Algunas recomendaciones...
        </h1>
        <p>
          Duis cillum consequat ex voluptate in ex consequat ad adipisicing.
          <br></br>Do ullamco ullamco cillum velit aliqua sunt et <br></br>proident deserunt
          adipisicing eiusmod.
        </p>

        <div className="contenedor-carrusel">
          <div className="carrusel-item ">
            <img src={imgContenedor_1}></img>
            <div className="container-bottom">
              <p>
                Qui excepteur pariatur et dolore reprehenderit sint 
                exercitation laboris veniam ipsum commodo qui.
              </p>
              <a href="#">Ver más</a>
            </div>
          </div>
          <div className="carrusel-item">
            <img src={imgContenedor_2}></img>
            <div className="container-bottom">
              <p>
                Qui excepteur pariatur et dolore reprehenderit sint 
                exercitation laboris veniam ipsum commodo qui.
              </p>
              <a href="#">Ver más</a>
            </div>
          </div>
          <div className="carrusel-item">
            <img src={imgContenedor_3}></img>
            <div className="container-bottom">
              <p>
                Qui excepteur pariatur et dolore reprehenderit sint 
                exercitation laboris veniam ipsum commodo qui.
              </p>
              <a href="#">Ver más</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home