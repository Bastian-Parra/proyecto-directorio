
import axios from '../api/axios.js'
import { useEffect, useState } from 'react';

function LugaresCard({lugar}) {

    const [imagenURL, setImagenURL] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:4000/imagenes/getLugarURL/${lugar.id}`)
        .then(response => {
            setImagenURL(response.data)
        })
        .catch(error => {
            console.error("Error al obtener el url de la imagen", error)
        })
    }, [lugar.id])

    return (
            <div className="lugar-card">
            <p id="title-card">{lugar.nombre_lugar}</p>
            <img id='img-card' src={`http://localhost:4000${imagenURL}`}/>
            <p><b>Direccion:</b> {lugar.direccion_lugar}</p>
            <div id="btn-lugar"><a href="">Ver mas</a></div>
            </div>
    )
}

export default LugaresCard;