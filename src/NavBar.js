import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './styles/NavBarStyles';
import './NavBar.css';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state={format:'hex',open:false}
        this.handleChange=this.handleChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }
    closeSnackbar(){
        this.setState({open:false});
    }
    handleChange(evt) {
        this.setState({ format: evt.target.value, open:true }, () => this.props.handleChange(this.state.format));
        
    }
    render() {
        const {level,handleSlider,show,classes} = this.props;
        const {format,open}=this.state;
       
        return (
            <header className={classes.NavBar}>
                <div className={classes.logo}>
                    <Link to='/'>ReactColorPicker</Link>
                     
                </div>
                {show && (<div >
                    <span>Level:{level}</span>

                    <div className='slider' >
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={handleSlider} 
                        />
                    </div>
                    

                </div> )}        
                <div className={classes.SelectContainer}>
                    <Select value={format} onChange ={this.handleChange}>
                           <MenuItem value='hex'>HEX -#ffffff</MenuItem>
                           <MenuItem value='rgb'>RGB -rgb(255,255,255)</MenuItem>
                         
                    </Select>
                </div>

                <Snackbar anchorOrigin={{vertical:'bottom',horizontal:'left'}}
                open={open}
                autoHideDuration={3000}
        message={<span id='message-id'>"Format Changed to {format.toUpperCase()}"</span>}
                ContentProps={{
                    "aria-describedby":"message-id"
                }} 
                onClose={this.closeSnackbar}
                action={[
                    <IconButton 
                    onClick={this.closeSnackbar} 
                    color='inherit'
                    key='close' 
                    aria-label='close'>
                        <CloseIcon />
                    </IconButton>
                ]}
               />
                

                
            </header>
        );
    }
}
export default withStyles(styles)(NavBar);