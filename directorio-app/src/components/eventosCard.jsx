import React from 'react';
import { Link } from 'react-router-dom';

function EventosCard({ evento }) {
  return (
    <div className="evento-card"> 
      <p id="title-card">{evento.nombre_evento}</p> 
      <p><b>Descripción:</b> {evento.descripcion_evento}</p>
      <p><b>Dirección:</b> {evento.direccion_evento}</p>
      <p><b>Fecha y hora:</b> {evento.fecha_hora}</p>
      <div id="btn-evento">
      </div>
          <Link to={`/eventos/${evento.id}`}>Ver más</Link>
      </div>
  );
}

export default EventosCard;