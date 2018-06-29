import React from 'react';

const validation = (props) => {

    if (props.stringLength > 5) {
        return (
            <div className= "ValidationComponent" >
                <p>Text Long Enough</p>
            </div>
        )
    }

    return (
        <div className= "ValidationComponent" >
            <p>Text too short</p>
        </div>
    )
    
};

export default validation;