import React from "react";
import Spots from '../vacationSpots';
import Data from './data'


function Cards () {
    let card = Data.map(spots => {
        return(
            <Spots
            spots = {spots} />
        )
    })

    return(
        <div className= "container">
            {card}
        </div>
    )
}

export default Cards