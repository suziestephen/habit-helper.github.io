import React from "react";
import { Link } from "react-router-dom";



function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg text-light">
            <div className="container">
                <Link className="navbar-brand" to="/homepage">Habit Helper</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/homepage"
                            className={window.location.pathname === "/Homepage" ? "nav-link active" : "nav-link"}
                        > Entry</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/HabitLog"
                            className={window.location.pathname === "/HabitLog" ? "nav-link active" : "nav-link"}
                        > My Habits</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;