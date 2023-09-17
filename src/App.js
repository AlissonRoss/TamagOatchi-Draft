
import './App.css';
import AnimateOatchi from './AnimateOatchi';
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
      <AnimateOatchi/>
      
      <footer>

      </footer>
    </div>
    
  );
}

export default App;
