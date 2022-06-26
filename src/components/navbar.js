import React from "react";
import TreeHard from "../images/TreeHardLogo.png"

export default function Navbar() {

    return (
        <nav>
            <a href="https://www.dotabuff.com/players/129050083" target="_blank" rel="noopener noreferrer">
                <img className="tree-logo" src={TreeHard}/>
            </a>
            <h1 className="nav-text">TreeHard's Recent Mid Heroes</h1>
        </nav>
    )
}