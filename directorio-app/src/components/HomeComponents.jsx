import imgContenedor_1 from '../assets/images/descarga.png'
import imgContenedor_2 from '../assets/images/descarga2.png'
import imgContenedor_3 from '../assets/images/descarga3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faShop, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function HomeComponents() {
    return (
        <>
            <ContenedorAbout/>
            <ContenedorRecomendaciones/>
        </>
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
                <Link to="#">Ver más</Link>
              </div>
            </div>
            <div className="carrusel-item">
              <img src={imgContenedor_2}></img>
              <div className="container-bottom">
                <p>
                  Qui excepteur pariatur et dolore reprehenderit sint 
                  exercitation laboris veniam ipsum commodo qui.
                </p>
                <Link to="#">Ver más</Link>
              </div>
            </div>
            <div className="carrusel-item">
              <img src={imgContenedor_3}></img>
              <div className="container-bottom">
                <p>
                  Qui excepteur pariatur et dolore reprehenderit sint 
                  exercitation laboris veniam ipsum commodo qui.
                </p>
                <Link to="#">Ver más</Link>
              </div>
            </div>
          </div>
      </div>
    )
}