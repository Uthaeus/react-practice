import React from 'react';

const validationComponent = props => {
    return props.len >= 5 ? <p>Text long enough</p> : <p>Text too short</p>;
}


export default validationComponent;