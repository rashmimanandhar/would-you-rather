import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Card, CardPanel, CardTitle, Col, Icon, Row} from "react-materialize";

class QuestionCard extends Component {
  render() {
    const {question, tab} = this.props;
    const {id, author, optionOne, optionTwo} = question;
    return (
      <div>
        <Row>
          <Col m={8} s={12} push="m2">
            <Card
              actions={[
                <Link key={id} to={`/questions/${id}`}>
                  {tab === "answered" ? "Results" : "View Poll"}
                </Link>
              ]}
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle image={`https://avatars.dicebear.com/v2/bottts/${author}.svg?options[mood][]=surprised&options[height]=256`}>

                </CardTitle>
              }
              horizontal
              revealIcon={<Icon>more_vert</Icon>}
            >
              <p> {author} asks</p>
              <ul className="collection with-header">
                <li className="collection-header"><h5>Would you rather</h5></li>
                <li className="collection-item">{optionOne.text}</li>
                <li className="collection-item">{optionTwo.text}</li>
              </ul>


            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default QuestionCard;
