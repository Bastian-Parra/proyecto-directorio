import { useAuth } from "../context/AuthContext";

function Perfil() {
    const {usuario} = useAuth()
    console.log(usuario)
    return (
        <></>
     )
}

export default Perfil;