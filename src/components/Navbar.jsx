import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import p from "../assets/p.png";


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg portfolio-navbar sticky-top">
        <div className="container">
          <NavLink
            className="navbar-brand d-flex align-items-center justify-content-center gap-2"
            href="#"
          >
            <img className="profile-img" src={p} alt="Aderanti" />
            <span
              className="brand-name"
            >
              Aderanti
            </span>
          </NavLink>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#portfolioNavbar"
            aria-controls="portfolioNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="portfolioNavbar">
            <ul className="navbar-nav ms-auto mt-2 gap-lg-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <ThemeToggle/>
      </nav>
    </div>
  );
}

export default Navbar;
