import React, { Component } from 'react'
import ColorBox from './ColorBox';
import {generatePallete} from './ColorHelpers';
import SeedColors from './SeedColors'
import './Pallete.css';
class Pallete extends Component {
    render() {
        console.log(generatePallete(SeedColors[4]));
    const colorBoxes = this.props.colors.map(color => (
    <ColorBox background ={color.color} name={color.name} />
    )); 
        return (
            
            <div className="Pallete">
                {/* NavBar goes here */}
                <div className='Pallete-colors'>
                    {colorBoxes}
                    

                </div>
                {/* footer goes here */}
                
            </div>
        );
    }
}
export default Pallete;