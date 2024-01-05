import "../CSS/MainNav.css";
import React from "react";

const MainNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse show" id="navbarColor01">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/noahfishxd"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github fa-2x"></i>
                <span className="nav-text">GitHub</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="mailto:noahfisherxd@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-envelope fa-2x"></i>
                <span className="nav-text">E-Mail</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://discordapp.com/users/197444850151456768"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-discord fa-2x"></i>
                <span className="nav-text">Discord</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://twitter.com/noahfisha"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter fa-2x"></i>
                <span className="nav-text">Twitter</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/Portfolio"
              >
                <i class="fas fa-briefcase fa-2x"></i>
                <span className="nav-text">Portfolio</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
