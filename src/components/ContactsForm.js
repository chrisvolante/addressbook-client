import React, { Component } from "react";
import { Field, reduxForm, focus } from "redux-form";
import { connect } from "react-redux";
import Input from "./Input";
import { required, nonEmpty } from "../validators";

import { createUserContact } from "../actions/protected-data";

export class ContactsForm extends Component {
  onSubmit(values) {
    this.props.dispatch(
      createUserContact(
        values.name,
        values.email,
        values.phone,
        values.address,
        values.description
      )
    );
  }

  render() {
    if (this.props.isCreated) {
      this.props.history.push("/");
    }
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <div className="login-form-wrapper">
        <div className="login-form">
          <form
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            {error}
            <label htmlFor="name">Name</label>
            <Field
              component={Input}
              type="text"
              name="name"
              id="name"
              validate={[required, nonEmpty]}
            />
            <label htmlFor="email">Email</label>
            <Field
              component={Input}
              type="email"
              name="email"
              id="email"
              validate={[required, nonEmpty]}
            />
            <label>Phone Number</label>
            <Field
              component={Input}
              type="text"
              name="phone"
              id="phone"
              validate={[required, nonEmpty]}
            />
            <label>Address</label>
            <Field
              component={Input}
              type="text"
              name="address"
              id="address"
              validate={[required, nonEmpty]}
            />
            <label>Description</label>
            <Field
              component={Input}
              type="text"
              name="description"
              id="description"
              validate={[required, nonEmpty]}
            />
            <button disabled={this.props.pristine || this.props.submitting}>
              Create
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isCreated: state.protectedData.isCreated };
};

const decoratedComponent = connect(mapStateToProps)(ContactsForm);

export default reduxForm({
  form: "createUserContact",
  onSubmitFail: (errors, dispatch) => dispatch(focus("create"))
})(decoratedComponent);
