import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Movies</Link>
        </li>
        <li>
          <Link to="/series">Series</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
