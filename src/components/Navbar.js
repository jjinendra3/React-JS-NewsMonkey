import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const [colortext, setcolortext] = useState("Dark Mode");
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top" id="nav-color">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ fontWeight: "500" }}>
            NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/business">
                  Business
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/entertainment">
                  Entertainment
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-outline-primary"
              id="btn-color"
              onClick={() => {
                props.colorer();
                if (props.color === "light") {
                  document.getElementById("btn-color").className =
                    "btn btn-outline-primary";
                  document.getElementById("nav-color").className =
                    "navbar navbar-expand-lg bg-dark navbar-dark sticky-top";
                  setcolortext("Light Mode");
                } else {
                  document.getElementById("btn-color").className =
                    "btn btn-outline-dark";
                  document.getElementById("nav-color").className =
                    "navbar navbar-expand-lg sticky-top";
                  setcolortext("Dark Mode");
                }
              }}
            >
              {colortext}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
