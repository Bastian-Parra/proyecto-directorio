import HeaderDashboard from "./headerDashboard";
import { useEventos} from "../../context/eventosContext"
import { useEffect } from "react";
function EventosDashboard() {
    const { mostrarEventos, eventos } = useEventos();

    useEffect(() => {
        mostrarEventos()
    }, [])
    return (
        <>
        <HeaderDashboard/>
        <div className="container-tabla">
            <h1>Eventos</h1>
            
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {eventos.map((evento) => (
                        <tr key={evento.id}>
                            <td>{evento.id}</td>
                            <td>{evento.nombre_evento}</td>
                            <td>{evento.fecha_hora}</td>
                            <td id="columna-opciones">
                                <button id="btn-eliminar">Eliminar</button>
                                <button id="btn-editar">Editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default EventosDashboard;