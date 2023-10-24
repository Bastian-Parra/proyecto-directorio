function DashboardComponents() {
    const titulo = "Panel de control (En mantenimiento)"
    return (
        <div className="container-panel">
            <h1>{titulo}</h1>
            <div className="container-tasks">
                <div className="task-card">
                    <h2>Negocios</h2>
                </div>
                <div className="task-card">
                    <h2>Eventos</h2>
                </div>
                <div className="task-card">
                    <h2>Lugares</h2>
                </div>
            </div>
        </div>
    )
}

export default DashboardComponents;