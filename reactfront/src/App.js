import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home.js'
import Negocios from './components/Negocios.js'
import Eventos from './components/Eventos.js'
import Lugares from './components/Lugares.js'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/negocios" component={Negocios}></Route>
        <Route path="/eventos" component={Eventos}></Route>
        <Route path="/lugares" component={Lugares}></Route>
      </Switch>
    </Router>
  )
}
export default App;
