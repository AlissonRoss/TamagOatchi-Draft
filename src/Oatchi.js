import { Button} from '@mui/material';
import React, { Component , useState} from 'react';



export default class Oatchi extends Component{
    
    constructor(){
        super();
        this.state ={
            hunger: 5,
            cleanliness: 5,
            sleep: 5,
            play: 5
    
        }
    }
   
};
