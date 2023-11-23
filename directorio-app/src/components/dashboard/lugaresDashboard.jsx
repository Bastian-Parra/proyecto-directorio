import HeaderDashboard from "./headerDashboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {useLugares} from "../../context/lugaresContext.jsx"
import { useEffect } from "react";
import { Link } from "react-router-dom";
function LugaresDashboard() {

    const {mostrarLugares, lugares} = useLugares()
    console.log(lugares)
    useEffect(() => {
        mostrarLugares()
    }, [])

    return (
        <>
        <HeaderDashboard/>
        <div className="container-btn-task">
            <Link className="btn-add" to="/dashboard/lugares/add"><FontAwesomeIcon icon={faPlus}/></Link>
            <Link className="btn-add" to="#"><FontAwesomeIcon icon={faMagnifyingGlass}/></Link>
        </div>
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