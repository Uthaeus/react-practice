import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="Input">
            <input className="In" type='text' value={props.nameIn} onChange={props.changed} />
        </div>
    )
};


export default userInput;