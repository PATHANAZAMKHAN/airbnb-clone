import React from "react";
import Star from "../Images/star.png";

export default function Card(props) {
    let source = require(`../Images/${props.items.coverImg}`);
    let badgeText
    if (props.items.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.items.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div id="card">
            <span id="sold-out">{badgeText}</span>
            <img src={source} alt="Error loading" />
            <span><img src={Star} alt="Error loading" id="star" /> {props.items.stats.rating}({props.items.stats.reviewCount}) . Usa</span>
            <p>{props.items.title}</p>
            <span><strong>From ${props.items.price}</strong>/ person</span>

        </div>
    )
}