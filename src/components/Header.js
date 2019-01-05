// Import 3rd Party Dependencies.
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <ul className="header" role="navigation">
        <li>
          <Link to="/">
            <h1>
              <i className="material-icons">contacts</i>
              Address Book
            </h1>
          </Link>
        </li>
        <li className="nav-button">
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    );
  }
}

export default Header;
