import React from 'react';

import './style.scss';

const Pot = ( { cards, player } ) => {
    return (
    <div className={ "pot" + player }>{ cards }</div>
    )
}

export default Pot;