import React from "react";
import Picture from "../Images/icon.png"


function Header() {
    return (
        // Header to function as Jumbotron 
        <div className="header"> 
            <div className="header-container">
                <div className="header-image">
                    <img src={Picture} alt="icon"  />
                </div>
                <h1>Habit Helper</h1>
                <h3>Self care starts here...</h3>
            </div>
        </div>
    );
}

export default Header;