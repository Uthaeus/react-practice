import React from 'react';
import './CharComponent.css';

const charComponent = props => {
    return (
        <div className='Comp' onClick={props.changed}>
            <p>{props.char}</p>
        </div>
    );
}


export default charComponent;