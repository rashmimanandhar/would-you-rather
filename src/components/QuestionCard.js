import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Row, Col, Card, Icon, CardTitle } from "react-materialize";

class QuestionCard extends Component {
  render() {
    const { question, tab } = this.props;
    const { id, author, optionOne, optionTwo } = question;
    return (
      <div>
        <Row>
          <Col m={6} s={12}>
            <Card
              actions={[
                <Link key={id} to={`/questions/${id}`}>
                  {tab === "answered" ? "Results" : "View Poll"}
                </Link>
              ]}
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle image="https://materializecss.com/images/sample-1.jpg">
                  {author} asks
                </CardTitle>
              }
              revealIcon={<Icon>more_vert</Icon>}
            >
              Would you rather
              <p>{optionOne.text}</p>
              <p>{optionTwo.text}</p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default QuestionCard;
