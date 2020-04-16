import React, {Component} from "react";
import {Card, CardTitle, Col, Icon, RadioGroup, Row,} from "react-materialize";
import {Redirect} from "react-router-dom";
import {answerQuestion} from "../actions/questions";

class AnswerCard extends Component {
  state = {
    selectedOption: "",
    toHome: false
  };

  handleChange = e => {
    this.setState({selectedOption: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const {selectedOption} = this.state;
    const {dispatch, id} = this.props;
    dispatch(answerQuestion(selectedOption, id));
    this.setState(() => ({selectedOption: "", toHome: id ? false : true}));
  }

  render() {
    const {selectedOption, toHome} = this.state;
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
                <RadioGroup
                  label="Options"
                  name="option"
                  onChange={this.handleChange}
                  options={[
                    {
                      label: optionOne.text,
                      value: optionOne.text,
                    },
                    {
                      label: optionTwo.text,
                      value: optionTwo.text,
                    }
                  ]}
                  value="optionOne.text"
                  withGap
                />
              </Card>
            </Col>
          </Row>

        </form>
      </div>
    );
  }
}

export default AnswerCard;
