import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import styles from './styles/ColorBoxStyles';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';


class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state={
            copied:false
        }
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState(){
        this.setState({copied:true},()=>{
            setTimeout(()=>this.setState({copied:false}),1500);
        })
    }
    render() {
        const { background,name,moreUrl,showFullPalette,classes} = this.props;
        const {copied} = this.state;
       
       

        return (
            <CopyToClipboard text={background} onCopy ={this.changeCopyState}>
                
                <div style={{backgroundColor: background}} 
                    className={classes.ColorBox}>
                    <div
                     style={{ backgroundColor: background }} 
                     className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
                      />
                    <div className={`${classes.copyMsg} ${copied && classes.showMsg}`} >
                           <h1>
                               copied!

                           </h1>
                        <p className={classes.copyText}>
                            {this.props.background}
                            </p>
                       </div>
                        <div >
                            <div className={classes.boxContent}>
                                <span className={classes.colorName}>{name}</span>
                            </div>
                             <button className={classes.copyButton}>COPY</button>
                                 {showFullPalette && (
                            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                                <span className={classes.seeMore} >MORE</span>
                            </Link>
                            ) }
                        
                        </div>
                    
                </div>    
            </CopyToClipboard>
        )
    }
}
export default withStyles(styles)(ColorBox);