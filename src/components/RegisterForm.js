// Import 3rd Party Dependencies.
import React from "react";
import { Field, reduxForm } from "redux-form";

// Import Actions from local files.
import { registerUser } from "../actions";

function handleSubmit(event, props) {
  event.preventDefault();
  const email = event.target.email.value;
  const username = event.target.username.value;
  const password = event.target.password.value;

  props.dispatch(registerUser(email, username, password));
}

const RegisterForm = props => {
  return (
    <div className="landing-form">
      <form onSubmit={(e, props) => handleSubmit(e, props)}>
        <div>
          <label>Username</label>
        </div>
        <Field name="username" type="text" id="username" component="input" />
        <div>
          <label>Email</label>
        </div>
        <Field name="email" type="text" id="email" component="input" />
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
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "RegisterForm"
})(RegisterForm);
