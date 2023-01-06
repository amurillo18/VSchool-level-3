import React from "react";
import './Badge.css'

function Badge(props) {
    return(
<div className="badge--container">
    <header className="header">
        <h1>Badge:</h1>
    </header>
    <div className="badge--info">
        <h2 className="name">Name: {props.info.firstName} {props.info.lastName}</h2>
        <h2 className="phone">Phone: {props.info.phoneNumber}</h2>
        <h2 className="place">Place of birth: {props.info.birthPlace}</h2>
        <h2 className="food">Favorite Food: {props.info.favFood}</h2>
        <h2 className="email">Email: {props.info.email}</h2>

        <div className="badge--textArea">
        {props.info.about}
        </div>
    </div>
</div>
    )
}

export default Badge