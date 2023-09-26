import './App.css';
import Navigator from './components/navigator.js'
import React, {useState, useEffect} from 'react'
import MainContent from './components/main-content.js';

function App() {

  return (
    <div className="App">
      <Navigator/>
    </div>  
  );
}

export default App;
