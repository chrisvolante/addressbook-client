import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUserContacts } from "../../actions";

class ContactsList extends Component {
  componentDidMount() {
    this.props.fetchUserContacts();
  }

  displayContactsTable() {
    if (Object.keys(this.props.contacts).length > 0) {
      const contactRow = this.props.contacts.map((contact, index) => {
        let contactNumber = index + 1;
        return (
          <tr key={index}>
            <th scope="row">{contactNumber}</th>
            <td>{contact.name}</td>
            <td>{contact.description}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td>{contact.address}</td>
          </tr>
        );
      });
      return (
        <table className="contacts-columns">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>{contactRow}</tbody>
        </table>
      );
    }
  }

  render() {
    return <div className="contacts-table">{this.displayContactsTable()}</div>;
  }
}

function mapStateToProps(state) {
  return { contacts: state.contactsReducer.contacts };
}

export default connect(
  mapStateToProps,
  { fetchUserContacts }
)(ContactsList);
