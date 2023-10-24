import React from 'react';

function EventosCard({ evento }) {
  return (
    <div className="negocio-card">
      <p id="title-card">{evento.nombre_evento}</p>
      <p><b>Descripción:</b> {evento.descripcion_evento}</p>
      <p><b>Dirección:</b> {evento.direccion_evento}</p>
      <p><b>Fecha y hora:</b> {evento.fecha_hora}</p>
      <div id="btn-evento"><a href="#">Ver más</a></div>
    </div>
  );
}

export default EventosCard;