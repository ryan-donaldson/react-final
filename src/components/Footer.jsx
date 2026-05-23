import React from "react";
import "./Footer.css";
import Logo from "../assets/logo-bg-removed.png";
import { Link } from "react-router-dom";

function Footer({ variant = "default" }) {
  return (
    <>
      <footer className={`${variant}`}>
        <div className="row footer__row ">
          <figure>
            <img className="footer__logo--img" src={Logo} alt="" />
          </figure>
          <div className="footer__social--list">
            <Link
              href="/github"
              target="_blank"
              className="
            footer__social--link
            link__hover-effect
            link__hover-effect--white
            "
            >
              GitHub
            </Link>
            <Link
              href="/linkedIn"
              target="_blank"
              className="
            footer__social--link
            link__hover-effect
            link__hover-effect--white
            "
            >
              LinkedIn
            </Link>
            <Link
              href="/contact"
              className="
            footer__social--link
            link__hover-effect
            link__hover-effect--white
            "
            >
              Contact
            </Link>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2026 Ryan Donaldson
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
