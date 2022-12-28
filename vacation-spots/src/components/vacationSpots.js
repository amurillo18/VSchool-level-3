import React from "react";

function VacationSpots(props) {
    return(
        <div className="spots-info">
            <h1>{props.spots.place}</h1>
            <p>{props.spots.price}</p>
            <p>{props.spots.timeToGo}</p>
        </div>
    )
}

export default VacationSpots