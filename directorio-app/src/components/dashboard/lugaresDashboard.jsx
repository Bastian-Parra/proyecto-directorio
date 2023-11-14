import HeaderDashboard from "./headerDashboard";
import {useLugares} from "../../context/lugaresContext.jsx"
import { useEffect } from "react";
function LugaresDashboard() {

    const {mostrarLugares, lugares} = useLugares()
    console.log(lugares)
    useEffect(() => {
        mostrarLugares()
    }, [])

    return (
        <>
        <HeaderDashboard/>
        <div className="container-tabla">
            <h1>Lugares</h1>
            
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID Reseña</th>
                        <th>Nombre</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {lugares.map((lugar) => (
                        <tr key={lugar.id}>
                            <td>{lugar.id}</td>
                            <td>{lugar.id_reseña}</td>
                            <td>{lugar.nombre_lugar}</td>
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

export default LugaresDashboard;