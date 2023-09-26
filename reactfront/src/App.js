import './App.css';
import Navigator from './components/navigator.js'
import React, {useState, useEffect} from 'react'
import MainContent from './components/main-content.js';
import idk from './components/testing.js';
import Home from './pages/Home'
import Eventos from './pages/Eventos'
import Negocios from './pages/Negocios'
import Lugares from './pages/Lugares'
import CompShowUsers from './components/testing.js';

function App() {
  let component 
  switch(window.location.pathname) {
    case "/":
      component = <Home/>
      break
      case "/eventos":
        component = <Eventos/>
        break
        case "/negocios":
          component = <Negocios/>
          break
          case "/lugares":
            component = <Lugares/>
            break

  }

  return (
    <>
    <Navigator/>
    {component}
    </>
  );
}

export default App;
