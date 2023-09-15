
import './App.css';
import Scene from './Scene.js';
import { Button } from '@mui/material';
import React, { Component , useEffect, useState} from 'react';

class Oatchi extends Component{
    
  constructor(props){
      super(props);
      
      this.state ={
          hunger: 5,
          cleanliness: 5,
          sleep: 5,
          play: 5
  
      }  
  }//END CONSTRUCTOR

  incrementHunger = () => {
    this.setState({hunger: this.state.hunger+1})
  }//END INCREASE HUNGER VALUE

  incrementClean = () => {
    this.setState({cleanliness: this.state.cleanliness+1})
  }//END INCREMENT CLEANLINESS VALUE

  incrementPlay = () => {
    this.setState({play: this.state.play+1})
  }//END INCREMENT PLAY VALUE

 
  // decrementValues = () =>{
  //
  
  //}
  render(){
    return (
      <div>
        <Button variant="contained" 
          onClick= {() => {
              {this.incrementHunger()}
              
          }}>Food {this.state.hunger}
        </Button>
        <Button variant="contained" 
        onClick= {() => {
            {this.incrementClean()}
            
        }}>Cleanliness {this.state.cleanliness}
      </Button>
      <Button variant="contained" 
        onClick= {() => {
            {this.incrementPlay()}
          }}>Play {this.state.play}
      </Button>
        
      </div>
    )
  }
 
};

function dateUpdate(){
  
  // let hrToString = currentTime.getHours();
  // let minToString = currentTime.getMinutes();
  // let secToString = currentTime.getSeconds();

}
function App() {

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return() => clearInterval(interval);
    } 
  );
    
  return (
    <div className="App">
      <header className="App-header">
        TamagOatchi Version 0.0
        <div>Time {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</div>
        <Oatchi/>
      </header>
     
        
      <Scene/>
      
      <footer>

      </footer>
    </div>
    
  );
}

export default App;
