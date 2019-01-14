import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// Import Actions from local files.
import LoginForm from "./LoginForm";

export const LoginPage = props => {
  if (props.isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }
  if (props.error) {
    return (
      <div>
        <p>Something happened.</p>
        <LoginForm />
      </div>
    );
  }
  return <LoginForm />;
};

const mapStateToProps = state => {
  return { isLoggedIn: state.auth.isLoggedIn, error: state.auth.error };
};

export default connect(mapStateToProps)(LoginPage);
