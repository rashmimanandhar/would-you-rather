import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, Col, Row} from "react-materialize";

class Leaderboard extends Component {
  render() {
    const {users} = this.props;
    console.log(users);
    return (<div className="leaderboard-container">
      <Row>
        <Col m={6} s={12} push="m3">
          {users.map(user => (
            <Card key={user.id} title={user.username}>
              <Row>
                <Col>Image</Col>
                <Col>
                  <Row><span>{user.name}</span></Row>
                  <Row><span>Answered Questions: {Object.keys(user.answers).length}</span></Row>
                  <Row><span>Unanswered Questions: {user.questions.length}</span></Row>
                </Col>
                <Col>Score : {Object.keys(user.answers).length + user.questions.length}</Col>
              </Row>
            </Card>
          ))}
        </Col>
      </Row>
    </div>);
  }
}

function mapStateToProps({users}) {
  return {
    users: Object.values(users)
  };
}

export default connect(mapStateToProps)(Leaderboard);
