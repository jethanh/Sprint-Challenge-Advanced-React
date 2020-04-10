import React from 'react';

function PlayerCard(props){
    return(
        <div className="container">
            {props.playerData.map(player => {
                return (
                    <div className="playerCard" key={player.id}> 
                        <p>Name: {player.name}</p>
                        <p>Country: {player.country}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PlayerCard;