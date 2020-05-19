import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import arrayMove from 'array-move';
import classNames from 'classnames';
import PaletteFormNav from './PaletteFormNav';
import ChromePickerForm from './ChromePickerForm';
import DraggableColorList from './DraggableColorList';
import SeedColors from './SeedColors';
import styles from './styles/NewPaletteFormStyles'


class NewPaletteForm extends Component {
  static defaultProps={
    maxAllowedColors:20
  }
  constructor(props){
    super(props);
    this.state={
      open:true,
      
    colors:SeedColors[0].colors,
    
    }
    this.randomColors = this.randomColors.bind(this);
    this.clearColors=this.clearColors.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
    this.addNewColor=this.addNewColor.bind(this);
   
  } 
 
    addNewColor(newColor){
      
      this.setState({ colors: [...this.state.colors, newColor]})
    }
  
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    onSortEnd = ({ oldIndex, newIndex }) => {
      this.setState(({ colors}) => ({
       colors : arrayMove(colors, oldIndex, newIndex),
      }));
    };
     handleSubmit(newPalette){
      
      const  Palette =
       {...newPalette,
        id: newPalette.paletteName.toLowerCase().replace(/ /g ,'-'),
       colors:this.state.colors
    }
      this.props.savePalette(Palette);
      this.props.history.push('/');
    }
    
    removeColor(colorName){
       this.setState({
         colors:this.state.colors.filter((color)=>color.name!==colorName)
       })
    }
    clearColors(){
      this.setState({colors:[]})

    }
    randomColors(){
      const allColors= SeedColors.map(p=>p.colors).flat();
      let randomIndex= Math.floor(Math.random()*allColors.length);
      let randomColor = allColors[randomIndex];
      let isDuplicateColor=true;
      while(isDuplicateColor){
           randomIndex= Math.floor(Math.random()*allColors.length);
           randomColor = allColors[randomIndex];
           // eslint-disable-next-line
           isDuplicateColor= this.state.colors.some(color=>color.name===randomColor.name);   
      }
      this.setState({colors:[...this.state.colors,randomColor]})
      
    }

    render() {
        const { classes,maxAllowedColors,allPalette} = this.props;
        const { open,colors } = this.state;
        const paletteIsFull = colors.length >= maxAllowedColors;

        return (
            <div className={classes.root}>
              <PaletteFormNav
                  handleDrawerOpen={this.handleDrawerOpen}
                  open={open}
                  classes={classes}
                  handleSubmit={this.handleSubmit}
                  allPalette={allPalette}
               />
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon /> 
                        </IconButton>
                    </div>
                    
                   
                    <Divider />
                    <div className={classes.container}>
                     <div className={classes.concon}>
                    <Typography variant="h4" >Design Your Palette</Typography>
                    <div className={classes.buttons}>
                    <Button 
                    variant='contained' 
                    color='secondary' 
                    className={classes.buttons}
                    onClick={this.clearColors}
                    >Clear Palette
                    </Button>
                    <Button 
                     variant='contained'
                     color='primary'
                    className={classes.buttons}
                     disabled={paletteIsFull}  
                     onClick={this.randomColors}
                     >
                       Random Palette
                       </Button>
                </div>

                   <ChromePickerForm
                    paletteIsFull={paletteIsFull}
                    colors={colors}
                    addNewColor={this.addNewColor}/> 


              </div>
              </div>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                   <DraggableColorList 
                              colors={colors} 
                              removeColor={this.removeColor}
                              axis='xy'
                              onSortEnd={this.onSortEnd}
                   />
                </main>
            </div>
        );
    }
} 
export default withStyles(styles, { withTheme: true })(NewPaletteForm);