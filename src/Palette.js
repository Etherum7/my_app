import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteColors';
class Palette extends Component {
    constructor(props){
        super(props);
        this.state={
            level:500,
            format:'hex'
        };
        this.handleSlider = this.handleSlider.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeFormat(val){
       this.setState({
               format:val
       })

    }
        
    handleSlider(level){
        this.setState({level});
    }
    render() {
    const {level,format} = this.state;
    const { colors,paletteName,emoji,id } = this.props.palette;
    const {classes} = this.props;    
    const colorBoxes = colors[level].map(color => (
    <ColorBox 
    background ={color[format]} 
    name={color.name} 
    key={color.id}
    
    showFullPalette={true}
     moreUrl={`/palette/${id}/${color.id}`}/>
    )); 
        return (
            
           
            <div className={classes.Palette}>
                <NavBar 
                level={level} 
                show={true}
                handleSlider={this.handleSlider}
                 handleChange ={this.changeFormat}/>
               
               
                {/* NavBar goes here */}
                <div className={classes.PaletteColors}>
                    {colorBoxes}
                    

                </div>

              <PaletteFooter paletteName={paletteName} emoji={emoji}/>
                
            </div>
        );
    }
}
export default withStyles(styles)(Palette);