// Imports 3rd Party Dependencies.
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Imports local files and Components.
import "./App.css";
import Header from "./components/Header";
import Routes from "./Routes";
import { authRefresh } from "./actions/auth";

export class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("authToken")) {
      this.props.dispatch(authRefresh());
    } else {
      if (
        this.props.location.pathname === "/dashboard" ||
        this.props.location.pathname === "/create"
      ) {
        this.props.history.push("/");
      }
    }
  }
  // componentDidUpdate(prevProps) {
  //   if (!prevProps.loggedIn && this.props.loggedIn) {
  //     // When we are logged in, refresh the auth token periodically
  //     this.startPeriodicRefresh();
  //   } else if (prevProps.loggedIn && !this.props.loggedIn) {
  //     // Stop refreshing when we log out
  //     this.stopPeriodicRefresh();
  //   }
  // }

  // componentWillUnmount() {
  //   this.stopPeriodicRefresh();
  // }

  // startPeriodicRefresh() {
  //   this.refreshInterval = setInterval(
  //     () => this.props.dispatch(refreshAuthToken()),
  //     60 * 60 * 1000 // One hour
  //   );
  // }

  // stopPeriodicRefresh() {
  //   if (!this.refreshInterval) {
  //     return;
  //   }

  //   clearInterval(this.refreshInterval);
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
