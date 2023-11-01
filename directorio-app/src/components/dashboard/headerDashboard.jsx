import { Link } from "react-router-dom"



export default function HeaderDashboard() {
    return(
        <div className="container-dashboard">
            <ul>
            <li><Link to="/dashboard/negocios">Negocios</Link></li>
            <li><Link to="/dashboard/lugares">Lugares</Link></li>
            <li><Link to="/dashboard/eventos">Eventos</Link></li>
            </ul>
        </div>

    )
}