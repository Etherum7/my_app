import React from 'react';
import {SortableContainer} from "react-sortable-hoc";
import DraggableColorBox from './DraggableColorBox';

const DraggableColorList= SortableContainer(({colors,removeColor})=> {
    return (
        <div style={{ height:"calc(100vh - 64px)"}}>
            {colors.map((color,index) =>
                <DraggableColorBox
                    key={color.name}
                    index={index}
                    color={color.color}
                    name={color.name}
                    distance={20}
                    handleClick={() => removeColor(color.name)}
                />
            )}
        </div>
    )
})
export default DraggableColorList;