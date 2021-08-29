import React from 'react';

export default function SizeSetting(props) {
    const changeSize = (value) => {
        props.onChangeSize(value)
    }

    return (
        <div className="panel panel-success">
            <div className="panel-heading">
                <h3 className="panel-title">Size: {props.fontSize}px</h3>
            </div>
            <div className="panel-body">
                <button type="button" className="btn btn-lg btn-success" onClick={() => changeSize(2)}>Tăng</button> &nbsp;
                <button type="button" className="btn btn-lg btn-success" onClick={() => changeSize(-2)}>Giảm</button>
            </div>
        </div>
        
    )
}