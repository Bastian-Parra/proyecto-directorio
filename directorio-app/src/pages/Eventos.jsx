import React, { useEffect } from 'react';
import '../styles/Eventos.css'
import {useEventos} from '../context/eventosContext.jsx'
import EventosCard from '../components/eventosCard'

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
      <div className='container-left-evento'></div>
      <div className='container-right-evento'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quaerat qui corrupti eveniet facere reiciendis temporibus. At adipisci ex aut fuga iusto assumenda sint maiores cupiditate aliquid, quae architecto ratione?</p>
      </div>
    </div>
    <div className='container-filters'>
      <button className='filtro'>Filtrar</button>
      <label for="site-search" placeholder='Nombre del evento'>Buscar por nombre </label>
      <input id="buscar" type="search" name="q" />
      <button className='filtro'>Buscar</button>
    </div>
    <div className='container-eventos-inside'>
        {eventos.map(evento => (
          <EventosCard evento={eventos} key={eventos.id}/>
        ))}
    </div>
    </>
  )
}

export default EventosPage