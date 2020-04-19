import React, {Component} from "react";
import {Card, CardTitle, Col, Icon, RadioGroup, Row,} from "react-materialize";
import {RadioButton} from 'react-materialize-forms';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {answerQuestion} from "../actions/shared";

class AnswerCard extends Component {
  state = {
    selectedOption: "",
    toHome: false,
    options: []
  };
 test = "";
  handleChange = (input) => {
    const selectedOption = this.state.options.indexOf(input.label) === 0 ? "optionOne" : "optionTwo";
    console.log(selectedOption);
    this.setState({selectedOption: selectedOption});
  }

  handleSubmit = e => {
    e.preventDefault();
    const {selectedOption} = this.state;
    const {dispatch, id} = this.props;
    dispatch(answerQuestion(selectedOption, id));
    this.setState(() => ({selectedOption: "", toHome: true}));
  }

  componentDidMount() {
    const { question} = this.props;
    const { optionOne, optionTwo} = question;
    this.setState({options: [optionOne.text, optionTwo.text]})

  }

  render() {
    const {selectedOption, toHome} = this.state;
    if (toHome === true) {
      return <Redirect to="/"/>;
    }
    const {id, question} = this.props;
    const {author, optionOne, optionTwo} = question;
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
                  <CardTitle image={`https://avatars.dicebear.com/v2/bottts/${author}.svg?options[mood][]=surprised&options[height]=256`}/>
                }
                horizontal
                revealIcon={<Icon>more_vert</Icon>}
              >
                <p> {author} asks</p>
                <ul className="collection with-header">
                  <li className="collection-header"><h5>Would you rather</h5></li>
                  <li className="collection-item">
                    <RadioButton
                      label={optionOne.text}
                      group="option"
                      onChange={this.handleChange}
                      withGap
                    />
                    <RadioButton
                      label={optionTwo.text}
                      group="option"
                      onChange={this.handleChange}
                      withGap
                    />

                  </li>
                </ul>
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
