import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, Tab } from "react-materialize";
import QuestionCard from "./QuestionCard.js";

class QuestionList extends Component {

  render() {
    const { questions, users, authedUser } = this.props;
    // what happens if authedUser is not found
    const userInfo = users.filter(user => {
      return user.id === authedUser;
    });

    const answeredQuestionIds = Object.keys(userInfo[0].answers);
    const unAnsweredQuestions = questions.filter(question => {
      return !answeredQuestionIds.includes(question.id);
    });
    const answeredQuestions = questions.filter(question => {
      return answeredQuestionIds.includes(question.id);
    });

    return (
      <div className="container">
        <Tabs className="tab-demo z-depth-1 tabs-fixed-width">
          <Tab
            active
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title="Unanswered"
          >
            {unAnsweredQuestions.map((question, index) => (
              <QuestionCard key={index} question={question} tab="unanswered" />
            ))}
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title="Answered"
          >
            {answeredQuestions.map((question, index) => (
              <QuestionCard key={index} question={question} tab="answered" />
            ))}
          </Tab>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions: Object.values(questions).sort((a,b) => b.timestamp - a.timestamp),
    users: Object.values(users),
    authedUser
  };
}
export default connect(mapStateToProps)(QuestionList);
