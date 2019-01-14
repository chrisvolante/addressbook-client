// Import 3rd Party Dependencies.
import React, { Component } from "react";
import { Field, reduxForm, focus } from "redux-form";

// Import Actions from local files.
import Input from "./Input";
import { registerUser } from "../actions/users";
import { loginUser } from "../actions/auth";
import { required, nonEmpty, matches, length, isTrimmed } from "../validators";

const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches("password");

export class RegisterForm extends Component {
  onSubmit(values) {
    const { username, email, password } = values;
    const user = { username, email, password };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(loginUser(username, password)));
    // .then(() => this.props.history.push("/dashboard"));
  }

  render() {
    return (
      <div className="landing-form">
        <form
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <label htmlFor="username">Username</label>
          <Field
            component={Input}
            type="text"
            name="username"
            validate={[required, nonEmpty, isTrimmed]}
          />
          <label htmlFor="email">Email</label>
          <Field
            component={Input}
            type="email"
            name="email"
            validate={[required, nonEmpty, isTrimmed]}
          />
          <label htmlFor="password">Password</label>
          <Field
            component={Input}
            type="password"
            name="password"
            validate={[required, passwordLength, isTrimmed]}
          />
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <Field
            component={Input}
            type="password"
            name="passwordConfirm"
            validate={[required, nonEmpty, matchesPassword]}
          />
          <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "register",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("register", Object.keys(errors)[0]))
})(RegisterForm);
