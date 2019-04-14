import React from 'react';

const GameTile= (props) => {
  
    return (
        <div className="gameTile" name={props.name} data-id={props.id} onClick={(event) => props.handleClick(event)}>
            <div className="img-container" data-id={props.id}>
            <img className="gameTileImage" alt={props.name} src={props.image} data-id={props.id}/>
            </div>
        </div>
    );
}


export default GameTile;