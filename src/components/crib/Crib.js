import React from 'react';

import './style.scss';

import Button from '../button/Button.js';

const Crib = ( { cards, hidden, player } ) => {
    return (
        <div className="crib">
          <div className={ "crib--curtain " + (hidden ? " hidden " : "") + player }>
            <span>HIDDEN</span>
          </div>
          <div className="crib--cards"> { cards } </div>
          <div className="crib--buttonWrapper">
            <Button text="HIDE/SHOW" onClick={ console.log("hide") } id="hideCrib" />
          </div>
        </div>
    )
}

export default Crib;