import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Signin from "./Signin";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <Signin />
      </div>
    );
  }
}

export default connect()(App);
