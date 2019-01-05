import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { createContact } from "../../actions";

class ContactsForm extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    this.props.dispatch(createContact(name, email, phone));
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div>
            <label>Name</label>
          </div>
          <Field name="name" type="text" component="input" />
          <div>
            <label>Email</label>
          </div>
          <Field name="email" type="email" component="input" />
          <div>
            <label>Phone Number</label>
          </div>
          <Field name="phone" type="text" component="input" />
          <div>
            <label>Address</label>
          </div>
          <Field name="address" type="text" component="input" />
          <div>
            <label>Description</label>
          </div>
          <Field name="description" type="text" component="input" />
          <div>
            <button>Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "createContact" })(ContactsForm);
