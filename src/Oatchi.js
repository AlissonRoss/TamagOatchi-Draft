import React, { Component} from 'react';
import { Button } from '@mui/material';
export class Oatchi extends Component{
    
    constructor(props){
        super(props);
        
        this.state ={
            hunger: 5,
            cleanliness: 5,
            sleep: 5,
            play: 5
    
        }  
        
    }//END CONSTRUCTOR

    componentDidMount() {
      // Start a timer to decrease hunger every 8 seconds
      this.hungerTimer = setInterval(() => {
        this.decrementHunger();
      }, 8000); //interval of 8 seconds
      
     console.log("Oatchi.js: setInterval Hunger was called")
    }
  
    componentWillUnmount() {
      // Clean up the timer when the component is unmounted
      clearInterval(this.hungerTimer);
    }
    decrementHunger = () => {
      //if hunger is larger than 0, decrement by 1
      if (this.state.hunger > 0) {
        this.setState((prevState) => ({
          hunger: prevState.hunger - 1, //decreases hunger by 1 point
          
        }));
      }
    };
  
    incrementHunger = () => {
      this.setState({hunger: this.state.hunger+1})
    }//END INCREASE HUNGER VALUE
  
    incrementClean = () => {
      this.setState({cleanliness: this.state.cleanliness+1})
    }//END INCREMENT CLEANLINESS VALUE
  
    incrementPlay = () => {
      this.setState({play: this.state.play+1})
    }//END INCREMENT PLAY VALUE
  
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