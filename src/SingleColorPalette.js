import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import ColorBox from './ColorBox';
import styles from './styles/PaletteColors';


class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades= this.gatherShades(this.props.palette,this.props.color);
        this.state = { format: 'hex'};
        this.changeFormat=this.changeFormat.bind(this);
        
    }
    changeFormat(val) {
        this.setState({
            format: val
        })
    }

    gatherShades(palette,colorToFilterBy){
       let shades=[];
       let allColors= palette.colors;
       
       for(let key in allColors ){
           
           shades= shades.concat(
               allColors[key].filter(color => 
                   color.id === colorToFilterBy
               ));
       }
       return shades.slice(1);

                        
    }
    render() {
        const {paletteName,emoji,id} =this.props.palette;
        const {format} = this.state;
        const {classes} =this.props;
        const colorBoxes = this._shades.map(color=>
        <ColorBox 
            key={color.name} 
            background={color[format]} 
            name={color.name}
            showFullPalette={false}
            /> 
            );
        return (
            <div className={classes.Palette}>
                <NavBar handleChange={this.changeFormat} show ={false} />
                <div className={classes.PaletteColors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`} >Go Back</Link>
                    </div>
                    </div> 
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    } 
}
export default withStyles(styles)(SingleColorPalette);