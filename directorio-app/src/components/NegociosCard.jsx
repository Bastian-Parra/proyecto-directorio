function NegociosCard({negocio}) {
    return (
            <div className="negocio-card">
            <h3>{negocio.nombre}</h3>
            <p><b>Descripcion:</b> {negocio.descripcion}</p>
            <p><b>Tipo: </b>{negocio.tipo_negocio}</p>
            <p><b>Horario:</b> {negocio.H_operacion}</p>
            <p><b>Direccion:</b> {negocio.direccion}</p>
            <p><b>Contacto Telefonico:</b> {negocio.telefono}</p>
            <p><b>Correo de contacto:</b> {negocio.correo}</p>
            <div id="btn-negocio"><a href="">Ver mas</a></div>
            </div>
    )
}

export default NegociosCard;