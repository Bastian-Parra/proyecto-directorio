import { useAuth } from "../context/AuthContext";

function ProfileComponents() {

    const { usuario } = useAuth();

    return (
        <div className="container-profile">
            <div className="container-profile-inside">
                <h1>Datos del usuario:</h1>
                <ul>
                    <li><b>Nombre de usuario: </b> {usuario.nombre}</li>
                    <li><b>Correo: </b> {usuario.correo}</li>
                    {usuario.rango}
                </ul>
            </div>
        </div>
    )
}

export default ProfileComponents;