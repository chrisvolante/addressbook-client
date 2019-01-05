// Import 3rd Party Dependencies.
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

// Import Actions from local files.
import { loginUser } from "../actions";

class LoginForm extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    this.props.dispatch(loginUser(username, password)).then(() => {
      this.props.history.push("/dashboard");
    });
  }

  render() {
    return (
      <div className="login-form-wrapper">
        <div className="login-form">
          <form onSubmit={e => this.handleSubmit(e)}>
            <div>
              <label>Username</label>
            </div>
            <Field
              name="username"
              type="text"
              id="username"
              component="input"
            />
            <div>
              <label>Password</label>
            </div>
            <Field
              name="password"
              type="password"
              id="password"
              component="input"
            />
            <div>
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { isLoggedIn: state.userReducer.isLoggedIn };
}

LoginForm = reduxForm({
  form: "LoginForm"
})(LoginForm);

export default connect(mapStateToProps)(LoginForm);
