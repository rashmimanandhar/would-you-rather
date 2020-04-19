import React, {Component} from "react";
import {Card, CardTitle, Col, Icon, Row} from "react-materialize";
import {Link} from "react-router-dom";

class ResultsCard extends Component {
  render() {
    const {id, yourAns, question} = this.props;
    console.log(id, yourAns, question);
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
              actions={[<Link key={id} to="/">Go Back</Link>]}
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle image={`https://avatars.dicebear.com/v2/bottts/${author}.svg?options[mood][]=surprised&options[height]=256`}/>
              }
              horizontal
              revealIcon={<Icon>more_vert</Icon>}
            >
              <p> {author} asks</p>
              <ul className="collection with-header">
                <li className="collection-header"><h5>Would you rather</h5></li>
                <li className="collection-item">
                  <span className={` ${this.answer === optionOne.text ? "new badge" :"hidden"}`}>Your Vote</span>
                  <p>{optionOne.text} </p>
                  <p> [has {percentageOptionOneVotes}% votes]</p>
                  <p> [Number of people who voted : {optionOneVotes}]</p>
                </li>
                <li className="collection-item">
                  <span className={` ${this.answer === optionTwo.text ? "new badge" :"hidden"}`}>Your Vote</span>
                  <p>{optionTwo.text} </p>
                  <p> [has {percentageOptionTwoVotes}% votes]</p>
                  <p>[Number of people who voted : {optionTwoVotes}]</p>
                </li>

              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResultsCard;
