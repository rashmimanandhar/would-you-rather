import React, { Component } from "react";
import Nav from "./Nav.js";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    if (this.props.authedUser === null) {
      return <Redirect to="/login"></Redirect>;
    }
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}
export default connect(mapStateToProps)(Dashboard);
