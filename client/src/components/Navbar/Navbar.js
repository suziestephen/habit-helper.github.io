import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg text-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Habit Helper</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/entry"
                            className={window.location.pathname === "/entry" ? "nav-link active" : "nav-link"}
                        > Entry</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/my-habits"
                            className={window.location.pathname === "/my-habits" ? "nav-link active" : "nav-link"}
                        > My Habits</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;