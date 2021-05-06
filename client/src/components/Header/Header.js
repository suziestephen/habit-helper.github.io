import React from "react";
import "./header.css";

function Header() {
    return (
        // Header to function as Jumbotron 
        <div className="jumbotron text-center"> 
            <div className="container text-light">
                <h1>Habit Helper</h1>
                <h3>Self care starts here...</h3>
            </div>
        </div>
    );
}

export default Header;