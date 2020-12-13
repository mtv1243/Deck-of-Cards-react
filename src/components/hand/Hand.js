import React from 'react';

import './style.scss';

const Hand = ( { cards, player, hidden } ) => {

    const handleHidden = (hidden) ? "hidden" : "";

    return (
        <div className="hand">
            <h3 className="hand--title">{ player }</h3>
            <div className="hand--wrapper">
                <div className={"hand--wrapper--curtain " + player  + " " + handleHidden }>
                    <span>HIDDEN</span>
                </div>
                <div className="hand--wrapper--cards"> { cards } </div>
            </div>
      </div>
    )
}

export default Hand;