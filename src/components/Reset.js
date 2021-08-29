import React from 'react';

export default function Reset (props) {
    const onResetDefault = () => {
        props.onResetDefault(true)
    }
    return (
        <button type="button" className="btn btn-lg btn-primary" onClick={() => onResetDefault()}>Reset</button>
    )
}