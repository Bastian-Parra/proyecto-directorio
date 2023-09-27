const obtenerHome = (req, res) => {
    const data = {message: "Estas en la pagina de inicio"}
    res.render('index' , {component: Home, data})
}

const obtenerNegocios = (req, res) => {
    res.render('negocios' , {component: Negocios})
}

const obtenerEventos = (req, res) => {
    res.render('eventos' , {component: Eventos})
}

const obtenerLugares = (req, res) => {
    res.render('lugares' , {component: Lugares})
}

export default {obtenerHome, obtenerNegocios, obtenerEventos, obtenerLugares}