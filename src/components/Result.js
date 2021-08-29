import React from 'react';

export default function Result(props) {
    const styles = () => ({
        color: props.color,
        borderColor: props.color,
        fontSize: props.fontSize
    })
    return (
        <div>
            <p>Color: {props.color} - Fontsize: {props.fontSize}px</p>
            <div 
                id='content' 
                style={styles()}
            >Nội dung setting</div>
        </div>
    )
}