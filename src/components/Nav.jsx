import React from "react";
import "./Nav.css";
import Logo from "../assets/logo-bg-removed.png";
import { Link } from "react-router-dom";

function Nav({ variant }) {
  return (
    <nav className={`nav nav__${variant}`}>
      <div className={`nav__container`}>
        {variant === "details" && (
          <div className="nav__details--back">
            <Link to="/searchpage" className="back__arrow"><i class="fa-solid fa-arrow-left"></i></Link>
          </div>
        )}
        <img className={`logo ${variant}__logo`} src={Logo} alt="" />
        {variant === "home" && (
          <div className="nav__home--title">
            <h1 className="title">The Movie Room</h1>
          </div>
        )}

        <ul className={`nav__links`}>
          <li>
            <Link to="/" className={`nav__link`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/searchpage" className={`nav__link`}>
              Search Movies
            </Link>
          </li>
          <li>
            <Link to="" className={`nav__link nav__link--primary`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
