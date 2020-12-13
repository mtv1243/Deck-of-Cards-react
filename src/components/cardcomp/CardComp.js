import React from 'react';

import './style.scss';

const CardComp = ( { suit, value } ) => {
    return (
        <div className={ "card card--" + suit }>
            <span className={ value + " card--value" }>{ value }</span>
        </div>
            
    )
}

export default CardComp;