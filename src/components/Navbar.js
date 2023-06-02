import React, { Component } from "react";
import logo from "C:/Users/asus/Desktop/CWH/newsapp/src/android-chrome-192x192.png";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{ fontWeight: "500" }}>
              <img
                src={logo}
                className="my-1"
                style={{ width: "10%", height: "10%", borderRadius: "100%" }}
                alt=""
              />
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports" onClick={this.sports}>
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    onClick={this.health}
                    to="/health"
                  >
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
                  <Link className="nav-link " to="/sports">
                    Technology
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
              
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
