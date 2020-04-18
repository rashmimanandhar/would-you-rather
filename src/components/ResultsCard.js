import React, {Component} from "react";
import {Card, CardTitle, Col, Icon, Row} from "react-materialize";
import {Link} from "react-router-dom";

class ResultsCard extends Component {
  render() {
    const {id, yourAns, question} = this.props;

    const {author, optionOne, optionTwo} = question;
    const optionOneVotes = optionOne.votes.length;
    const optionTwoVotes = optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const percentageOptionOneVotes = (optionOneVotes / totalVotes) * 100;
    const percentageOptionTwoVotes = (optionTwoVotes / totalVotes) * 100;
    let answer = "";
    if(yourAns === "optionOne"){
      this.answer = optionOne.text;
    } else{
      this.answer = optionTwo.text;
    }

    return (
      <div>
        <Row>
          <Col m={6} s={12} push="m3">
            <Card
              actions={[<Link key={id} to="/dashboard">Go Back</Link>]}
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle image="https://materializecss.com/images/sample-1.jpg"/>
              }
              horizontal
              revealIcon={<Icon>more_vert</Icon>}
            >
              <h5>{author} asks</h5>
              Would you rather
              <p>
                {optionOne.text} has {percentageOptionOneVotes}% votes
              </p>
              <p>
                {optionTwo.text} has {percentageOptionTwoVotes}% votes
              </p>

              <div>Your answer is "{this.answer}"</div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResultsCard;
