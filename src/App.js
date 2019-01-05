// Imports 3rd Party Dependencies.
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Imports local files and Components.
import "./App.css";
import { LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS } from "./actions";
import Header from "./components/Header";
import Routes from "./Routes";

class App extends Component {
  // Checks local storage to see if User is logged in.
  componentDidMount() {
    const jwtToken = localStorage.getItem("token");

    if (jwtToken) {
      this.props.dispatch(LOGIN_USER_SUCCESS(jwtToken));
      this.props.history.push("/dashboard");
    }
  }
  // Removes token from local storage and logs the User out.
  handleLogout() {
    localStorage.removeItem("token");
    this.props.dispatch(LOGOUT_USER_SUCCESS());
    this.props.history.push("/login");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
        <button onClick={() => this.handleLogout()}>Logout</button>
      </div>
    );
  }
}

export default withRouter(connect()(App));
