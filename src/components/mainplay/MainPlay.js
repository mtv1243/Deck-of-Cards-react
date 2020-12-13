import React from 'react';

import './style.scss';

import Count from '../count/Count.js';
import Crib from '../crib/Crib.js'
import Pot from '../pot/Pot.js';
import Starter from '../starter/Starter.js';

const MainPlay = ({ starterCard, countNum, pot1Cards, pot2Cards, crib1Cards, crib2Cards }) => {
    return (
        <div className="mainPlay">
            <div className="mainPlay--left">
                <Starter card={ starterCard } />
                <Count countNum={ countNum } />
            </div>
            <div className="mainPlay--center">
                <Pot cards={ pot1Cards } player="player1" />
                <Pot cards={ pot2Cards } player="player2" />
            </div>
            <div className="mainPlay--right">
                <Crib cards={ crib1Cards } hidden={ false } player="player1" />
                <Crib cards={ crib2Cards } hidden={ true } player="player2" />
            </div>
        </div>
    )
}

export default MainPlay;