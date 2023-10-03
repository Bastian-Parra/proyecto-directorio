const obtenerHome = (req, res) => {
    const data = {message: "Estas en la pagina de inicio"}
    res.render('index' , {component: Home, data})
}


const obtenerEventos = (req, res) => {
    res.render('eventos' , {component: Eventos})
}

const obtenerLugares = (req, res) => {
    res.render('lugares' , {component: Lugares})
}

const obtenerLogin = (req, res) => {
    res.render('login' , {component: Login})
}

export default {obtenerHome, obtenerNegocios, obtenerEventos, obtenerLugares, obtenerLogin}