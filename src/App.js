import React, { Component } from 'react';
import Pallete from './Pallete';
import SeedColors from "./SeedColors";



class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
      
  //   }
  // }
  
  render() {
    return (
      <div>
        <Pallete {...SeedColors[7]} />
        
      </div>
    )
  }
}

export default App;


