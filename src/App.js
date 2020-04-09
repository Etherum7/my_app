import React, { Component } from 'react';
import Pallete from './Pallete';
import { generatePallete } from './ColorHelpers';
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
        <Pallete pallete={generatePallete(SeedColors[7])} />
        
      </div>
    )
  }
}

export default App;


