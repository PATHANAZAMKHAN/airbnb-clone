import React from "react";
import Star from "../Images/star.png";
// import katie from "../Images/katie-zaferes.png"


export default function Card(props){
    return(
        <div id="card">

            <img src= "../Images/katie-zaferes.png" alt ="Error loading"/>   
            <span><img src={Star} alt = "Error loading" id = "star"/> {props.rating}({props.reviewCount}) . Usa</span>
            <p>{props.title}</p>
            <span><strong>From ${props.price}</strong>/ person</span> 

        </div>
    )
}