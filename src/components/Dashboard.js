import React, { Component } from "react";
import Nav from "./Nav.js";
import QuestionList from "./QuestionList.js";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getQuestions } from "../actions/shared";

class Dashboard extends Component {
  componentDidMount() {
    if (this.props.authedUser !== null) {
      this.props.dispatch(getQuestions());
    }
  }
  render() {
    if (this.props.authedUser === null) {
      return <Redirect to="/login"></Redirect>;
    }
    return (
      <div>
        <Nav />
        <QuestionList />
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}
export default connect(mapStateToProps)(Dashboard);
