import HeaderDashboard from "./headerDashboard";
import { useNegocios } from "../../context/negociosContext";
import { useEffect } from "react";
function NegociosDashboard() {

    const { mostrarNegocios, negocios } = useNegocios()
    
    useEffect(() => {
        mostrarNegocios()
    }, [])


    return (
        <>
        <HeaderDashboard/>
        <div className="container-tabla">
            <h1>Negocios</h1>
            
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {negocios.map((negocio) => (
                        <tr key={negocio.id}>
                            <td>{negocio.id}</td>
                            <td>{negocio.nombre}</td>
                            <td>{negocio.descripcion}</td>
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

export default NegociosDashboard;