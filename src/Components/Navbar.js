import React from "react";
import '../index.css';


export default function Navbar(){
    return(
        <nav className="head-container">
            <img src="logo192.png" alt="description of image" height='40px'></img>
            <h1 className="head-start">ReactFacts</h1>
            <h2 className="head-end">React Course - Project 1</h2>
        </nav>
    )
}