import React, { Component } from "react";
import { connect } from "react-redux";
import ResultsCard from "./ResultsCard";
import AnswerCard from "./AnswerCard";

class QuestionPage extends Component {
  render() {
    const { id, questions, users, authedUser } = this.props;
    const userInfo = users.filter(user => {
      return user.id === authedUser;
    });
    const answeredQuestionIds = Object.keys(userInfo[0].answers);
    const isQuestionAnswered = answeredQuestionIds.includes(id);
    let yourChoice = null;
    if (isQuestionAnswered) {
      yourChoice = userInfo[0].answers[id];
    }
    const question = questions.filter(question => question.id == id)[0];
    console.log(isQuestionAnswered, yourChoice);
    //check if the question is answered or not
    return (
      <div>
        {isQuestionAnswered ? (
          <ResultsCard id={id} yourAns={yourChoice} question={question} />
        ) : (
          <AnswerCard id={id} question={question} />
        )}
      </div>
    );
  }
}
function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;
  return {
    id,
    questions: Object.values(questions),
    users: Object.values(users),
    authedUser
  };
}
export default connect(mapStateToProps)(QuestionPage);
