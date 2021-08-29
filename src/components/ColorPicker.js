import React from 'react';

export default function ColorPicker(props) {
    const colors = ['red', 'green', 'blue', '#ccc'];

    const setColor = (color) => {
        props.setColor(color)
    }
    return (
        <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Color Picker</h3>
                </div>
                <div className="panel-body">
                    {colors.map((color, index) => (
                        <span 
                            key={index} 
                            style={{backgroundColor: color, color: color}}
                            className={props.color === color ? 'active' : ''}
                            onClick={() => setColor(color)}
                        ></span>
                    ))}
                </div>
        </div>
    
    )
}