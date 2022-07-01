import React from "react";

export default function Navbar(props) {

    return (
        <nav>
            <a href="https://www.dotabuff.com/players/129050083" target="_blank" rel="noopener noreferrer">
                <img className="tree-logo" src={props.image}/>
            </a>
            <h1 className="nav-text">TreeHard's Recent Mid Heroes</h1>
        </nav>
    )
}