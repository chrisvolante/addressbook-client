import React from "react";
import { Switch, Route } from "react-router-dom";

import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Landing from "./components/Landing";
import ContactsForm from "./components/Contacts/ContactsForm";
import ContactsList from "./components/Contacts/ContactsList";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/create" component={ContactsForm} />
        <Route path="/dashboard" component={ContactsList} />
      </Switch>
    );
  }
}
