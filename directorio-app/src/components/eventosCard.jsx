import { useEffect, useState } from 'react'
import axios from '../api/axios.js'

function EventosCard({ evento }) {

  const [imagenURL, setImagenURL] = useState('');


    useEffect(() => {
        // Hacer una solicitud al servidor para obtener la URL de la imagen
        axios.get(`http://localhost:4000/images/getEventoURL/${evento._id}`)
          .then(response => {
            setImagenURL(response.data);
          })
          .catch(error => {
            console.error('error al obtener el url la imagen', error);
          });
      }, [evento._id]);

  return (
    <div className="evento-card"> 
      <p id="title-card">{evento.nombre_evento}</p> 
      <img id="img-card" src={`http://localhost:4000${imagenURL}`}/>
      <p><b>Dirección:</b> {evento.direccion_evento}</p>
      <p><b>Fecha y hora:</b> {evento.fecha_hora}</p>
      <p><b>Descripción:</b> {evento.descripcion_evento}</p>
      </div>
  );
}

export default EventosCard;