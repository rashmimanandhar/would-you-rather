import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, Col, Row} from "react-materialize";

class Leaderboard extends Component {
  render() {
    const {users} = this.props;

    return (<div className="leaderboard-container">
      <Row>
        <Col m={6} s={12} push="m3">
          {users.sort((a,b) => {
            console.log(a, b);
            let scoreA = Object.keys(a.answers).length + a.questions.length;
            let scoreB = Object.keys(b.answers).length + b.questions.length;
            return scoreB - scoreA;
          }).map(user => (

            <Card key={user.id} title={user.name}>
              <Row>
                <Col>
                  <img src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&size=128&name=${user.name}`} alt=""/>
                </Col>
                <Col>
                  <Row><span>Answered Questions: {Object.keys(user.answers).length}</span></Row>
                  <Row><span>Created Questions: {user.questions.length}</span></Row>
                  <Row><span>Score : {Object.keys(user.answers).length + user.questions.length}</span></Row>
                </Col>
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
