import React from "react";
import { Link } from "react-router-dom";
import style from "./navBar.module.css";

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/series">Series</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
