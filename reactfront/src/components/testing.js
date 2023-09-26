import axios from 'axios'
import {useState, useEffect} from 'react'
import {link} from 'react-router-dom'

const URI = 'http://localhost:5000/usuarios/'

const CompShowUsers = () => {
    const [usuario, setUsuarios] = useState([])
    useEffect(() => {
        getUsuarios()
    }, [])

    const getUsuarios = async () => {
        const resultado = await axios.get(URI)
        setUsuarios(resultado.data)
    }

    const deleteUsuario = async (id) => {
        axios.delete(`${URI}${id}`)
        getUsuarios()
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuario.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td>{usuario.nombre_usuario}</td>
                                    <td>{usuario.contraseña}</td>
                                    <td>{usuario.correo_usuario}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowUsers