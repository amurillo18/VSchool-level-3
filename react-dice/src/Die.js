import React from "react";

function Die(props) {
 return(
    <div className="die--container">
        <h3 className="die">{props.number}</h3>
    </div>
 )
}

export default Die