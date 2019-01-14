import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchUserContacts,
  deleteUserContact
} from "../actions/protected-data";

export class ContactsList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUserContacts());
  }

  updateContact(id) {
    console.log(id);
  }

  deleteContact(id) {
    this.props.dispatch(deleteUserContact(id));
  }

  displayContactsTable() {
    const contactRow = this.props.listOfContacts.map((contact, index) => {
      let contactNumber = index + 1;
      return (
        <tr key={index}>
          <th scope="row">{contactNumber}</th>
          <td>{contact.name}</td>
          <td className="hide">{contact.description}</td>
          <td>{contact.phone}</td>
          <td className="hide">{contact.email}</td>
          <td className="hide">{contact.address}</td>
          <td className="hide">
            <button onClick={this.deleteContact.bind(this, contact.id)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
    return (
      <table className="contacts-columns">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th className="hide" scope="col">Description</th>
            <th scope="col">Phone</th>
            <th className="hide" scope="col">Email</th>
            <th className="hide" scope="col">Address</th>
            <th className="hide" scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{contactRow}</tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <div className="dashboard-container">
          <div className="entry-button">
            <Link to="/create">Entry</Link>
          </div>
        </div>
        <div className="contacts-table">{this.displayContactsTable()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listOfContacts: state.protectedData.listOfContacts,
    isDeleted: state.protectedData.isDeleted
  };
};

export default connect(mapStateToProps)(ContactsList);
