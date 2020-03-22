import React, { Component } from "react";
import { connect } from "react-redux";

class Signin extends Component {
  render() {
    console.log(this.props);
    return <div>Sign In</div>;
  }
}

function mapStateToProps({ users }) {
  return {
    usersId: Object.keys(users)
  };
}
export default connect(mapStateToProps)(Signin);
