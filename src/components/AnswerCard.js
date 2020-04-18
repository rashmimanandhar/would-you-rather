import React, {Component} from "react";
import {Card, CardTitle, Col, Icon, Row,} from "react-materialize";
import {RadioButton} from 'react-materialize-forms';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {answerQuestion} from "../actions/questions";

class AnswerCard extends Component {
  state = {
    selectedOption: "",
    toHome: false
  };

  handleChange = e => {
    console.log(e)
    this.setState({selectedOption: e.group});
  }

  handleSubmit = e => {
    e.preventDefault();
    const {selectedOption} = this.state;
    const {dispatch, id} = this.props;
    console.log(selectedOption)
    dispatch(answerQuestion(selectedOption, id));
    this.setState(() => ({selectedOption: "", toHome: true}));
  }

  render() {
    const {selectedOption, toHome} = this.state;
    console.log(toHome);
    if (toHome === true) {
      return <Redirect to="/"/>;
    }
    const {id, question} = this.props;
    const {author, optionOne, optionTwo} = question;
    console.log(question);
    return (<div>
        <form className="answer-question" onSubmit={this.handleSubmit}>
          <Row>
            <Col m={6} s={12} push="m3">
              <Card
                key={id}
                actions={[<button key={id} className="btn" type="submit" disabled={selectedOption === ""}>
                  Submit
                </button>]}
                closeIcon={<Icon>close</Icon>}
                header={
                  <CardTitle image="https://materializecss.com/images/sample-1.jpg"/>
                }
                horizontal
                revealIcon={<Icon>more_vert</Icon>}
              >
                <h5>{author} asks</h5>
                Would you rather
                <>
                  <RadioButton
                    label={optionOne.text}
                    value="optionOne"
                    group="optionOne"
                    onChange={this.handleChange}
                    withGap
                  />
                  <RadioButton
                    label={optionTwo.text}
                    group="optionTwo"
                    onChange={this.handleChange}
                    withGap
                  />

                </>

              </Card>
            </Col>
          </Row>

        </form>
      </div>
    );
  }
}

function mapStateToProps({authedUsers}, {id, question}) {
  return {
    authedUsers,
    question,
    id
  }
}

export default connect(mapStateToProps)(AnswerCard);
