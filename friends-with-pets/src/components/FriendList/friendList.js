import React from "react";
import Data from '../data'
import Friend from '../Friend/Friend'

function FriendsList() {
    const list = Data.map(data => {
        return(
        <Friend
        data = {data}/>
    
    )
})

    return(
        <div>
            {list}
        </div>
    )
}

export default FriendsList