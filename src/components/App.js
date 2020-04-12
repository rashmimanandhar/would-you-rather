import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="h-100">
          <Route path="/login" exact component={Signin} />
          <Route path="/questions/:id" exact component={AnswerPage} />
          <Route path="/" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
