
import React, {useState, useEffect } from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import Navegador from './components/Navegador.jsx'
import Home from './pages/Home.jsx'
import Negocios from './pages/Negocios.jsx'
import Eventos from './pages/Eventos.jsx'
import Lugares from './pages/Lugares.jsx'
import Footer from './components/Footer.jsx'
import Login from './pages/login.jsx'
import Registro from './pages/Registro.jsx'
import Error404 from './pages/404.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import Perfil from './pages/Perfil.jsx'
import RutasProtegidas from './RutasProtegidas.jsx'
import './app.css'



function App() {

  // // logica para el loader
  // const [estaCargando, setEstaCargando] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setEstaCargando(false)
  //   }, 2000)
  // }, [])

  return (
    <div className="App">   
      <div className="content">
        <AuthProvider>
          <BrowserRouter>
            <Navegador/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/negocios' element={<Negocios/>}></Route>
              <Route path='/eventos' element={<Eventos/>}></Route>
              <Route path='/lugares' element={<Lugares/>}></Route>
              <Route path='/register' element={<Registro/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path="/404" element={<Error404 />} />
              <Route path="*" element={<Navigate to="/404"/>}/>
              <Route element={<RutasProtegidas/>}>
                <Route path='/profile' element={<Perfil/>}></Route>
              </Route>
            </Routes>
            
          </BrowserRouter>
        </AuthProvider>
      </div>
      <Footer/>
    </div>
  )
}

export default App
