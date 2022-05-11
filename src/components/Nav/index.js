import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <div className="navbar bg-light fixed-top justify-content-center">
            <ul className="nav m-2">
                <li className="nav-item m-2">William Brooks</li>
                <li className="nav-item m-2">
                    <Link to='/'>About me</Link>
                </li>
                <li className="nav-item m-2">
                    <Link to='/portfolio'>Portfolio</Link>
                </li>
                <li className="nav-item m-2">
                    <Link to='/resume'>Resume</Link>
                </li>
                <li className="nav-item m-2">
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;