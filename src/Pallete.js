import React, { Component } from 'react'
import ColorBox from './ColorBox';


import './Pallete.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
class Pallete extends Component {
    constructor(props){
        super(props);
        this.state={
            level:500
        };
        this.handleSlider = this.handleSlider.bind(this);
    }
    handleSlider(newLevel){
        this.setState({level:newLevel});
    }
    render() {
        const {level} = this.state;
        const { colors } = this.props.pallete;
        
    const colorBoxes = colors[level].map(color => (
    <ColorBox background ={color.hex} name={color.name} />
    )); 
        return (
           
            <div className="Pallete">
                <Slider defaultValue={level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={this.handleSlider} />
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