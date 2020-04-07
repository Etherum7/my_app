import React, { Component } from 'react';
import './Colorbox.css';

class ColorBox extends Component {
    render() {
        const { background,name} = this.props;
        return (
            <div style={{backgroundColor: background}} className='ColorBox'>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span>{name}</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                    <span className='see-more'>More</span>
                </div>
            </div>
        )
    }
}
export default ColorBox;