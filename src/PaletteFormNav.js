import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import Button from '@material-ui/core/Button';
import PaletteMetaForm from './PaletteMetaForm';
import styles from './styles/PaletteFormNavStyles'


class PaletteFormNav extends Component {
    constructor(props){
        super(props);
        this.state={
            formShowing:false
        }
        this.hideForm=this.hideForm.bind(this);
        this.formShow=this.formShow.bind(this);
    }
    hideForm(){
        this.setState({
            formShowing: false
        })
    }
    formShow(){
        this.setState({
            formShowing:true
        })
    }
    render() {
        const {classes,open,handleSubmit,handleDrawerOpen} = this.props;
       
        
        return (
            <div className={classes.root}>
                <CssBaseline />

                <AppBar
                    position="fixed"
                    color="default"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open
                    })}
                >

                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <AddToPhotosIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Create A Palette
                      </Typography>
                        

                    </Toolbar>
                  
                    
                    <div className={classes.navBtns}>
                        <Link to='/' >

                        <Button
                            
                            // size='small'
                            variant='contained'
                            color='secondary'
                        >
                            Go Back
                            </Button>
                            </Link>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={this.formShow}
                            //className={classes.button}
                            >
                            Save
                        </Button>
                     </div>
                    {this.state.formShowing && (
                                                <PaletteMetaForm
                                                    handleSubmit={handleSubmit}
                                                    hideForm={this.hideForm}
                                                    allPalette={this.props.allPalette}
                                                />
                    )}
                    
                </AppBar>
            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);
