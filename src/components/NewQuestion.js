import React, {Component} from "react";
import {connect} from "react-redux";
import {handleNewQuestion} from "../actions/questions";
import {Card, Col, Row} from "react-materialize";
import {TextInput} from "react-materialize-forms";
import {Redirect} from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false
  }

  isFormValid = () => {
    const {optionOne, optionTwo} = this.state;
    return optionOne && optionTwo;
  }

  handleOptionOneChange = (input) => {
    this.setState({optionOne: input})
  }

  handleOptionTwoChange = (input) => {
    this.setState({optionTwo: input})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {optionOne, optionTwo} = this.state;
    const {dispatch} = this.props;
    dispatch(handleNewQuestion(optionOne, optionTwo));
    this.setState(() => ({optionOne: "", optionTwo: "", toHome: true}));
  }

  render() {
    if (this.state.toHome === true) {
      return <Redirect to="/"/>;
    }
    return (
      <form className="new-poll" onSubmit={this.handleSubmit}>
        <Row>
          <Col
            m={6}
            s={12}
            push="m3"
          >
            <Card
              actions={[<button key="1" className="btn" type="submit"
                                disabled={!this.isFormValid()}>
                Submit
              </button>]}
              title="Create a new poll"
            >
              Complete the question:
              <br/>
              Would you rather...
              <Row>
                <Col
                  m={12}
                  s={12}
                >
                  <TextInput
                    label="Option 1"
                    onChange={this.handleOptionOneChange}
                  />
                </Col>
              </Row>
              OR
              <Row>
                <Col
                  m={12}
                  s={12}
                >
                  <TextInput
                    label="Option 2"
                    onChange={this.handleOptionTwoChange}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </form>
    )
  }
}
function mapStateToProps({authedUsers}) {
  return {
    authedUsers
  }
}
export default connect(mapStateToProps)(NewQuestion);
