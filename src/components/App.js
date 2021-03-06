import React, {Component, Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./leaderboard";
import {LoadingBar} from "react-redux-loading";
import NotFound from "./404";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          <div className="h-100">
            {this.props.loading ? <Route path="/" component={Signin}/> : (
              <div>
                <Nav/>
                <Switch>
                  <Route path="/" exact component={Dashboard}/>
                  <Route path="/questions/:id" exact component={QuestionPage}/>
                  <Route path="/add" exact component={NewQuestion}/>
                  <Route path="/leaderboard" exact component={Leaderboard}/>
                  <Route path="" component={NotFound}/>
                </Switch>
              </div>)}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
