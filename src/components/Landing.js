import React, { Component } from "react";

// Import Actions from local files.
import RegisterForm from "./RegisterForm";

export class Landing extends Component {
  render() {
    return (
      <div className="landing-wrapper">
        <div className="landing-content">
          <h1>Your Address Book in the Cloud</h1>
          <p>
            Keep all your contacts in one place and accessible on any device.
          </p>
          <p>
            Easily create, update, and delete Contacts in your Address Book.
          </p>
        </div>
        <RegisterForm />
      </div>
    );
  }
}

export default Landing;
