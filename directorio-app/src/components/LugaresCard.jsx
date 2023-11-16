import { useEffect } from 'react'
import {Link} from 'react-router-dom'

function LugaresCard({lugar}) {
    return (
            <div className="negocio-card">
            <p id="title-card">{lugar.nombre}</p>
            <p><b>Descripcion:</b> {lugar.descripcion}</p>
            <p><b>Tipo: </b>{lugar.tipo_lugar}</p>
            <p><b>Horario:</b> {lugar.H_operacion}</p>
            <p><b>Direccion:</b> {lugar.direccion}</p>
            <p><b>Contacto Telefonico:</b> {lugar.telefono}</p>
            <p><b>Correo de contacto:</b> {lugar.correo}</p>
            <div id="btn-lugar"><a href="">Ver mas</a></div>
            </div>
    )
}

export default LugaresCard;