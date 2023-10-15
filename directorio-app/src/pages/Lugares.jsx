import React from 'react'
import '../styles/lugares.css'
const parrafoHeader = 'En la zona de Valparaíso, Chile, se encuentran numerosos lugares de interés que ofrecen una amplia variedad de experiencias para los visitantes. Esta región costera es conocida por su belleza escénica y su rica historia cultural. Aquí, puedes encontrar una gran cantidad de tiendas, restaurantes y otras opciones para disfrutar de la vida urbana.'

function Lugares() {
  return(
    <div className="contenedor-header-lugares">
      <div className="contenedor-header">
        <div className="contenedor-izquierda"></div>
        <div className="contenedor-derecha">
          <h1>Lugares de interes a tu disposicion</h1>
          <p>{parrafoHeader}</p>
        </div>
      </div>
    </div>
  )
}

export default Lugares