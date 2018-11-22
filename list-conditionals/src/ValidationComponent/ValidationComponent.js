import React from 'react';

const validationComponent = props => {
    return props.len >= 5 ? 'Text long enough' : 'Text too short';
}


export default validationComponent;