import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";
import Nav from "./Nav";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    console.log(this.props.loading);
    return (
      <Router>
        <div className="h-100">
          <Route path="/login" exact component={Signin} />
          {this.props.loading ? null : <Nav />}
          <div>
            <Route path="/questions/:id" exact component={QuestionPage} />
            <Route path="/" exact component={Dashboard} />
          </div>
        </div>
      </Router>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}
export default connect(mapStateToProps)(App);
