
function LugaresCard({lugar}) {
    return (
            <div className="negocio-card">
            <p id="title-card">{lugar.nombre_lugar}</p>
            <p><b>Reseña:</b> {lugar.id_reseña}</p>
            <p><b>Ubicacion: </b>{lugar.id_ubicacion}</p>
            <p><b>Direccion:</b> {lugar.direccion_lugar}</p>
            <div id="btn-lugar"><a href="">Ver mas</a></div>
            </div>
    )
}

export default LugaresCard;