import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames'
import styles from './styles/ColorBoxStyles';


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
                    className={classNames(classes.copyOverlay, {
                        [classes.showOverlay]: copied
                    })}
                      />
                      
                    <div className={classNames(classes.copyMsg, {
                        [classes.showMsg]: copied
                    })} >
                           <h1>
                               copied!

                           </h1>
                        <p className={classes.copyText}>
                            {background}
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