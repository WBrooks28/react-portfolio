import React from "react";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          William Brooks
        </Link>
      </h1>

      <nav>
        <Link to="/">
          About
        </Link>
      </nav>
      <nav>
        <Link to="/portfolio">
          Portfolio
        </Link>
      </nav>
      <nav>
        <Link to="/resume">
          Resume
        </Link>
      </nav>
      <nav>
        <Link to="/Contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Nav;
