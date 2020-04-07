import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './Colorbox.css';

class ColorBox extends Component {
    render() {
        const { background,name} = this.props;
        return (
            <CopyToClipboard text={background}>
            <div style={{backgroundColor: background}} className='ColorBox'>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span>{name}</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                    <span className='see-more'>More</span>
                </div>
            </div>
            </CopyToClipboard>
        )
    }
}
export default ColorBox;