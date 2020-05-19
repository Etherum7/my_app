import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import classNames from "classnames";
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
import  "./PaletteList.css";
class PaletteList extends Component {
    constructor(props){
        super(props);
        this.state={
            openDeleteDialog: false,
            deletingId:""
        }
        this.deleteDialog=this.deleteDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.goToPalette = this.goToPalette.bind(this);
    }
    
    closeDialog(){
      this.setState({ openDeleteDialog:false,deletingId:""})
    }
    openDialog(id){
      this.setState({ openDeleteDialog:true,deletingId:id})
    }
    deleteDialog() {
      this.props.removePalette(this.state.deletingId);
      this.setState({openDeleteDialog:false})
    }
    
    goToPalette(id){
     this.props.history.push(`/palette/${id}`);
    }
    render() {
        const { palettes, classes} = this.props;
        const {openDeleteDialog}= this.state;
        //const totalClass= 'body'+' '+ classes.root;
        return (
            <div className={classNames(classes.root, {
                        "body": true,
                    })}>
               
                <div className={classes.container}>
                    <nav className={classes.nav}>
                         <h1>React Colors</h1>
                         <Link to='/palette/new'>Create New Palette</Link>
                    </nav>
                 
                        
                            <TransitionGroup className={classes.palettes} >

                           
                     {palettes.map(palette=> (
                         <CSSTransition key={palette.id} timeout={500} classNames='fade'>
                             <MiniPalette 
                             openDialog={this.openDialog} 
                             {...palette} 
                             goToPalette= {this.goToPalette} 
                             key={palette.id} 
                             />
                         </CSSTransition>
                   
                   ))}
                    </TransitionGroup>
                        
                  </div>
                  <Dialog open={openDeleteDialog} aria-labelledby='delete-this-dialog' onClose={this.closeDialog}>
                      <DialogTitle id='delete-this-dialog'>Delete this Palette?</DialogTitle>
                      <List>
                          <ListItem button onClick={this.deleteDialog} >
                              <ListItemAvatar >
                                  <Avatar style={{backgroundColor: blue[100],color: blue[600]}}>
                                       <CheckIcon />
                                  </Avatar>
                                 
                              </ListItemAvatar>
                              <ListItemText>Delete</ListItemText>
                          </ListItem>
                          <ListItem button onClick={this.closeDialog}>
                              <ListItemAvatar >
                                  <Avatar  style={{backgroundColor: red[100],color: red[600]}}>
                                  <CloseIcon />
                                  </Avatar>
                              </ListItemAvatar>
                              <ListItemText>Cancel</ListItemText>
                          </ListItem>
                      </List>
                  </Dialog>
                </div>
                
           // </div>
        )
    }
}
export default withStyles(styles)(PaletteList);