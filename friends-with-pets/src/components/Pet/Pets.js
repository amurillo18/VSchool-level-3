import React from "react";

function Pet(props) {
    return(
        <div>
            <h3>{props.info.name}</h3>
            <p>breed:{props.info.breed}</p>
        </div>
    )
}

export default Pet