import React from "react";
import logo from "../Images/air-bnb-logo.png";
import grid from "../Images/photo-grid.png"

export function Navbar() {
    return (
        <nav id="Navbar">
            <img src={logo} alt="Error Loading" id="Image" />
        </nav>
    )
}

export function Uppersection() {
    return (
        <>
            <div id="image-grid">
                <img src={grid} alt="Error loading" />
            </div>
            
            <div className="Text1">

                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by <br></br>
                    one-of-a-kind hosts-all without leaving home
                </p>

            </div>
        </>
    )
}