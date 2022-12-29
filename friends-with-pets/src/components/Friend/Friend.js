import React from "react";
import Pets from '../Pet/Pets'

function Friends(props) {
    const petList = props.data.pets.map(info => {
    return(
            <Pets 
            info = {info}/>
    
    )
    })

    return(
        <div>
            <h1>{props.data.name}</h1>
            <p>Age:{props.data.age}</p>
            <h2>Pet(s)</h2>
            <div>{petList}</div>
            <hr></hr>
        </div>
    )
}

export default Friends