import React, { Component } from "react";
import { Field, reduxForm, focus } from "redux-form";
import Input from "./Input";
import { loginUser } from "../actions/auth";
import { required, nonEmpty } from "../validators";

export class LoginForm extends Component {
  onSubmit(values) {
    this.props.dispatch(loginUser(values.username, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error =
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
        ;
    }
    return (
      <div className="login-form-wrapper">
        <div className="login-form">
          <form
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            {error}
            <label htmlFor="username">Username</label>
            <Field
              component={Input}
              type="text"
              name="username"
              id="username"
              validate={[required, nonEmpty]}
            />
            <label htmlFor="password">Password</label>
            <Field
              component={Input}
              type="password"
              name="password"
              id="password"
              validate={[required, nonEmpty]}
            />
            <button disabled={this.props.pristine || this.props.submitting}>
              Login
            </button>
            <p>Demo Account Credentials</p>
            <p>Username: demo</p>
            <p>Password: password11</p>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(LoginForm);
