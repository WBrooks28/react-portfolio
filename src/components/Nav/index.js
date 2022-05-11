import React from "react";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <header className="flex-row px-1 ">
      <h1 className="col font-weight-bold">
        <Link to="/">
          William Brooks
        </Link>
      </h1>
      <div className="flex-row align-middle justify-content-around col pt-2">
        <nav className="m-1 nav-item h-2">
          <Link to="/">
            About
          </Link>
        </nav>
        <nav className="m-1 nav-item h-2">
          <Link to="/portfolio">
            Portfolio
          </Link>
        </nav>
        <nav className="m-1 nav-item h-2">
          <Link to="/resume">
            Resume
          </Link>
        </nav>
        <nav className="m-1 nav-item h-2">
          <Link to="/Contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
