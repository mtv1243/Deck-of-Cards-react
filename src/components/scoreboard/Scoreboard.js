import React from 'react';

import './style.scss';

const Scoreboard = ( { score1, score2, gameNum } ) => {

    // console.log(gameNum);

    return (
        <div className="scoreboard">
            <div className="scoreboard--gameKey">Private Game Key: <span>{ gameNum }</span></div>
            <div className="scoreboard--wrapper">
                <section className="scoreboard--wrapper--score1">
                    <label htmlFor="scoreboard--wrapper--score1--counter">Player 1:</label>
                    <input type="number" id="score1-counter" defaultValue={score1}></input>
                </section>
                <section className="scoreboard--wrapper--score2">
                    <label htmlFor="scoreboard----wrapper--score2--counter">Player 2:</label>
                    <input type="number" id="score2-counter" defaultValue={score2}></input>
                </section>
            </div>
        </div>
    )
}

export default Scoreboard;