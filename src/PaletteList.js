import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import  "./PaletteList.css";
import uuid from 'uuid/v4';
class PaletteList extends Component {
    goToPalette(id){
     this.props.history.push(`/palette/${id}`);
    }
    render() {
        const { palettes, classes} = this.props;
        const clas= 'body'+' '+ classes.root;
        return (
            <div className={clas} >
               
                <div className={classes.container}>
                    <nav className={classes.nav}>
                         <h1>React Colors</h1>
                         <Link to='/palette/new'>Create New Palette</Link>
                    </nav>
                 
                        
                            <TransitionGroup className={classes.palettes} >

                           
                     {palettes.map(palette=> (
                         <CSSTransition key={palette.id} timeout={500} classNames='fade'>
                             <MiniPalette removePalette={this.props.removePalette} {...palette} handleClick= {()=>this.goToPalette(palette.id)} key={uuid()} />
                         </CSSTransition>
                   
                   ))}
                    </TransitionGroup>
                        
                  </div>
                  <Dialog open={true} aria-labelledby='delete-this-dialog'>
                      <DialogTitle id='delete-this-dialog'>Delete this Palette?</DialogTitle>
                      <List>
                          <ListItem button>
                              <ListItemAvatar >
                                  <Avatar style={{backgroundColor: blue[100],color: blue[600]}}>
                                       <CheckIcon />
                                  </Avatar>
                                 
                              </ListItemAvatar>
                              <ListItemText>Delete</ListItemText>
                          </ListItem>
                          <ListItem button>
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