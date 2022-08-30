import React from "react";
import ReactDOM from "react-dom";

export default function Main(){
    return(
            <main>
                <h1 className="main-title">Fun facts about react</h1>

                <ul className="main-facts">
                    <li>Was first released in 2013</li>
                    <li>Was created by Jordan Walke</li>
                    <li>Over 100K stars on github</li>
                    <li>Maintained by Facebook</li>
                    <li>Used extensively on enterprise apps</li>
                </ul>
            </main>
    )
}