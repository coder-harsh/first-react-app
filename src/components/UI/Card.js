// Card.css and Card.js deal with ui
//baki component expenseitem se deal karte hain.. isliye hum 2 folder banaenge


import React from "react";
import './card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;