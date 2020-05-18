import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import { generatePalette } from './ColorHelpers';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import SeedColors from "./SeedColors";
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';
import Page from "./Page";

class App extends Component {
   constructor(props){
     super(props);
     const savePalettes =JSON.parse(window.localStorage.getItem("palette")) ;
     this.state={palette: savePalettes|| SeedColors}
     this.savePalette =this.savePalette.bind(this);
     this.findPalette=this.findPalette.bind(this);
     this.removePalette=this.removePalette.bind(this);
   }
  removePalette(id){
    this.setState({palette: this.state.palette.filter(palette=> palette.id !== id)},
    this.syncLocalStorage)
  }
  findPalette(id){
   return this.state.palette.find(function(palette){
      return palette.id ===id;
    });

  }
  savePalette(newPalette){
    this.setState({palette:[...this.state.palette, newPalette]},
      this.syncLocalStorage)
  }
  syncLocalStorage(){
   window.localStorage.setItem("palette",JSON.stringify(this.state.palette))
  }
  render() {
    return (
      <div >
      <Route render={({location})=>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='page' timeout={500}>
            <Switch location={location} >
              
                <Route exact 
                path="/palette/new" 
                render={(routeProps)=>
                  <Page>
                    <NewPaletteForm 
                    savePalette={this.savePalette} 
                    allPalette={this.state.palette} 
                    {...routeProps}/>
                    </Page>
                     } 
                    
                />
               
                
                <Route 
                exact 
                path="/" 
                render={(routeProps)=> 
                <Page>
                <PaletteList removePalette={this.removePalette} {...routeProps} palettes ={this.state.palette}/>
                </Page>
                }
                
                />
                
                
                <Route 
                exact 
                path="/palette/:id"
                  render={routeProps =>
                    <Page>
                  <Palette 
                  palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
                   </Page>
                   }
                  />
                
                
                <Route 
                exact
                path="/palette/:paletteId/:colorId" 
                render={routeProps => 
                  <Page>
                <SingleColorPalette
                color={routeProps.match.params.colorId}
                palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} />
                 </Page>}
                />
               
              </Switch>
              
               </CSSTransition>
        </TransitionGroup>
      }
          >
         
      
      </Route>        

        
      </div>
    )
  }
}

export default App;


