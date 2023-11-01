import { useEffect } from 'react'
import {Link} from 'react-router-dom'

function NegociosCard({negocio}) {
    return (
            <div className="negocio-card">
            <p id="title-card">{negocio.nombre}</p>
            <p><b>Descripcion:</b> {negocio.descripcion}</p>
            <p><b>Tipo: </b>{negocio.tipo_negocio}</p>
            <p><b>Horario:</b> {negocio.H_operacion}</p>
            <p><b>Direccion:</b> {negocio.direccion}</p>
            <p><b>Contacto Telefonico:</b> {negocio.telefono}</p>
            <p><b>Correo de contacto:</b> {negocio.correo}</p>
            <div id="btn-negocio">
            </div>
                <Link to={`/negocios/${negocio.id}`}>Ver más</Link>
            </div>
    )
}

export default NegociosCard;