import React from 'react';

import './style.scss';

import Button from '../button/Button.js';
import Scoreboard from '../scoreboard/Scoreboard.js';

const Marquis = ({ score1, score2, gameNum }) => {
    return (
        <div className="marquis">
            <Button text="Deal" id="dealButton" onClick={ console.log('deal') }/>
            <Scoreboard score1={ score1 } score2={ score2 } gameNum={ gameNum } />
            <Button text="Reset" id="dealButton" onClick={ console.log('reset') }/>
      </div>
    )
}

export default Marquis;