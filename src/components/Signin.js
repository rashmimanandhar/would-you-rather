import React, { Component } from "react";
import { connect } from "react-redux";
import "materialize-css";
import { Button, Card, Row, Col, Icon } from "react-materialize";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";

class Signin extends Component {
  state = {
    selectedUser: "",
    loggedIn: false
  };

  onUserChange = user => {
    this.setState(() => ({
      selectedUser: user
    }));
  };

  handleSubmit = () => {
    const { selectedUser } = this.state;
    const { dispatch } = this.props;
    dispatch(setAuthedUser(selectedUser));
    this.setState(() => ({ selectedUser: "", loggedIn: true }));
  };

  render() {
    const { usersId } = this.props;
    const { selectedUser, loggedIn } = this.state;
    console.log(loggedIn + " logged in");
    if (loggedIn === true) {
      console.log("redirected to");
      return <Redirect to="/" />;
    }
    return (
      <div className="valign-wrapper h-100 NavBar">
        <Row>
          <Col>
            <Card
              actions={[
                <Button
                  key="button"
                  onClick={this.handleSubmit}
                  node="button"
                  type="submit"
                  waves="light"
                  disabled={selectedUser === "" || selectedUser === undefined}
                >
                  Login
                  <Icon right>send</Icon>
                </Button>
              ]}
              className="blue-grey darken-1"
              closeIcon={<Icon>close</Icon>}
              revealIcon={<Icon>more_vert</Icon>}
              textClassName="white-text"
              title="Select User"
            >
              <select
                className="browser-default"
                onChange={event => this.onUserChange(event.target.value)}
                value={selectedUser}
              >
                <option>-------</option>
                {usersId.map((user, index) => (
                  <option key={index}>{user}</option>
                ))}
              </select>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    usersId: Object.keys(users)
  };
}
export default connect(mapStateToProps)(Signin);
