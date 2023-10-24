import React, { useEffect } from 'react';
import '../styles/eventos.css'
import {useEventos} from '../context/eventosContext.jsx'
import EventosCard from '../components/eventosCard'
import Imagen from '../assets/eventos.png'

const EventosPage = () => {
  
  const { mostrarEventos, eventos } = useEventos()


  useEffect(() => {
    mostrarEventos()
  }, [])

  if (eventos.length === 0) {
    return (
      <h1>No hay Eventos</h1>
    )
  }

  return (
    <>
    <div className='container-evento'>
      <div className='container-left-evento'>
        <img
          src = {Imagen}
          width="500" // Ajusta el ancho de la imagen
          height="200" // Ajusta la altura de la imagen
        />
      </div>
      <div className='container-right-evento'>
        <p className = "descripción_sección">La sección de eventos es un lugar especial dedicado a la celebración de diversas actividades y acontecimientos que pueden ser de tu interés. Aquí, te invitamos a explorar un amplio catálogo de eventos que abarcan una variedad de temas, desde conciertos, exhibiciones artísticas, conferencias educativas, hasta ferias y festivales locales. Cualquiera que sea tu pasión o área de interés, seguramente encontrarás eventos emocionantes y entretenidos que se adaptarán a tus preferencias.</p>
      </div>
    </div>
    <div className='container-filters'>
      <button className='filtro'>Filtrar</button>
      <label htmlFor="buscar" placeholder='Nombre del evento'>Buscar por nombre </label>
      <input id="buscar" type="search" name="q" />
      <button className='filtro'>Buscar</button>
    </div>
    <div className='container-eventos-inside'>
      {eventos.map((evento) => (
        <EventosCard evento={evento} key={evento.id}/>
      ))}
    </div>
    </>
  )
}

export default EventosPage