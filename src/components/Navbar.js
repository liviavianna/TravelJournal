import React from "react";
import worldIcon from "../imgs/world.svg"

export default function Navbar () {
    return (
        <nav> 
            <img className="icon--world" src={worldIcon}/>
            <p>my travel journal.</p>
        </nav>
    )
}