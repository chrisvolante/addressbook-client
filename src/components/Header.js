// Import 3rd Party Dependencies.
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  logOut() {
    localStorage.removeItem("authToken");
    this.props.history.push("/");
  }

  render() {
    if (this.props.isLoggedIn) {
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
            <Link to="/" onClick={this.logOut}>
              Log Out
            </Link>
          </li>
        </ul>
      );
    }
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

const mapStateToProps = state => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

export default connect(mapStateToProps)(Header);
