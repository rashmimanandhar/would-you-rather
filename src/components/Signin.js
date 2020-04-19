import React, { Component } from "react";
import { connect } from "react-redux";
import "materialize-css";
import { Button, Card, Row, Col, Icon } from "react-materialize";
import { setAuthedUser } from "../actions/authedUser";

class Signin extends Component {
  state = {
    selectedUser: "",

  };

  onUserChange = user => {
    this.setState(() => ({
      selectedUser: user
    }));
  };

  handleSubmit = () => {
    const { selectedUser } = this.state;
    const { dispatch } = this.props;
    this.setState(() => ({ selectedUser: ""}));
    dispatch(setAuthedUser(selectedUser));
  };

  render() {
    const { usersId } = this.props;
    const { selectedUser } = this.state;
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
