
import React from 'react'
import Navegador from './components/Navegador.jsx'
import Home from './pages/Home.jsx'
import Negocios from './pages/Negocios.jsx'
import Eventos from './pages/Eventos.jsx'
import Lugares from './pages/Lugares.jsx'
import Footer from './components/Footer.jsx'
import Login from './pages/login.jsx'
import Registro from './pages/Registro.jsx'
import Error404 from './pages/404.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Perfil from './pages/Perfil.jsx'
import RutasProtegidas from './RutasProtegidas.jsx'
import RutaDashboard from './dashboardProtegido.jsx'
import {Route, Routes, Navigate} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { NegociosProvider } from './context/negociosContext.jsx'
import { EventosProvider } from './context/eventosContext.jsx'
import './app.css'



function App() {
  return (
    <div className="App">   
      <div className="content">
        <AuthProvider>
          <NegociosProvider>
          <EventosProvider>
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
                <Route element={<RutaDashboard />}>
                  <Route path='/dashboard' element={<Dashboard/>}></Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </EventosProvider>
          </NegociosProvider>
        </AuthProvider>
      </div>
      <Footer/>
    </div>
  )
}

export default App
