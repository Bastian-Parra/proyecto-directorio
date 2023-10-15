import React from 'react'
import '../styles/lugares.css'
import imgRight from '../assets/Lugaresimage.jpg'
const parrafoHeader = 'En la zona de Valparaíso, Chile, se encuentran numerosos lugares de interés que ofrecen una amplia variedad de experiencias para los visitantes. Esta región costera es conocida por su belleza escénica y su rica historia cultural. Aquí, puedes encontrar una gran cantidad de tiendas, restaurantes y otras opciones para disfrutar de la vida urbana.'

function Lugares() {
  return(
    <div className="contenedor-header-lugares">
      <div className="contenedor-header">
        <div className="contenedor-izquierda"></div>
        <div className="contenedor-derecha">
          <h1>Lugares de interes a tu disposicion</h1>
          <p>{parrafoHeader}</p>
          <div className="container-buttons">
            <a id="btn-Buscar" href="/">Buscar</a>
            <a id="btn-Filtrar"href="/">Filtrar</a>
          </div>      
      </div>
        </div>
      </div>

 );
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

export default Lugares;
