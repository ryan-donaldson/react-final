import React, { useState } from "react";
import "./Nav.css";
import Logo from "../assets/logo-bg-removed.png";
import { Link } from "react-router-dom";

function Nav({ variant }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`nav nav__${variant}`}>
      <div className="nav__container">

        {/* Back arrow for details page */}
        {variant === "details" && (
          <div className="nav__details--back">
            <Link to="/searchpage" className="back__arrow">
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
        )}

        {/* Logo */}
        <img className={`logo ${variant}__logo`} src={Logo} alt="" />

        {/* Home title */}
        {variant === "home" && (
          <div className="nav__home--title">
            <h1 className="title">The Movie Room</h1>
          </div>
        )}

        {/* Hamburger icon (mobile only) */}
        <i
          className="fa-solid fa-bars nav__menu-icon"
          onClick={() => setIsOpen(!isOpen)}
        ></i>

        {/* Desktop links */}
        <ul className="nav__links">
          <li>
            <Link to="/" className="nav__link">Home</Link>
          </li>
          <li>
            <Link to="/searchpage" className="nav__link">Search Movies</Link>
          </li>
          <li>
            <Link to="" className="nav__link nav__link--primary">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <ul className="mobile__menu">
          <li>
            <Link to="/" className="nav__link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/searchpage"
              className="nav__link"
              onClick={() => setIsOpen(false)}
            >
              Search Movies
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="nav__link nav__link--primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
