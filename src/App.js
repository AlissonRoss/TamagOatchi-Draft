
import './App.css';
import Scene from './Scene.js';
import {Oatchi} from './Oatchi'
import Time from './Time'
import React from 'react';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        TamagOatchi Version 0.0
        <Time/>
        <Oatchi/>
      </header>
      <Scene/>
      
      <footer>

      </footer>
    </div>
    
  );
}

export default App;
