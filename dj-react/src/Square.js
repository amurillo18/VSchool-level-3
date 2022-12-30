import React from "react";
import './Square.css';

function Square(props) {
 return(
    <div className="square" style={{backgroundColor: props.color}}></div>
 )
}

export default Square