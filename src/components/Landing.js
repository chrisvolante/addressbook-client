import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// Import Actions from local files.
import RegisterForm from "./RegisterForm";

export const Landing = props => {
  if (props.isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="landing-wrapper">
      <div className="landing-content">
        <h1>Your Address Book in the Cloud</h1>
        <p>Keep all your contacts in one place and accessible on any device.</p>
        <p>Easily create and delete Contacts in your Address Book.</p>
      </div>
      <RegisterForm {...props} />
    </div>
  );
};

const mapStateToProps = state => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

export default connect(mapStateToProps)(Landing);
