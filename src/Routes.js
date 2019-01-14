import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import Landing from "./components/Landing";
import ContactsList from "./components/ContactsList";
import ContactsForm from "./components/ContactsForm";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/dashboard" component={ContactsList} />
        <Route exact path="/create" component={ContactsForm} />
        <Route exact path="/edit" component={ContactsForm} />
      </Switch>
    );
  }
}
