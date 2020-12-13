import React from 'react';

import './style.scss';

const Count = ({ countNum }) => {
    return (
        <div className="count">
            <h4 className="count--title">Count:</h4>
            <div className="count--number">{ countNum }</div>
        </div>
    )
}

export default Count;