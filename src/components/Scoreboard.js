import React from 'react';


const Scoreboard = (props) => {
    return (
        <div>
           <h2>Score = {props.score}</h2>
            <h2>Round = {props.round}</h2>
        </div>
    )
}

export default Scoreboard;