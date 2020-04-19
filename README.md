# Would your Rather Project

This project is created using React and Redux. The main objective of this project is to create polls and submit your answers for polls created by other users. The other feature is the Leaderboard, this feature tracks the number of questions asked and the number of answers given by that user to calculate who is in the lead. 

To run the project
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Project Structure
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── actions
        ├── authedUser.js # contains all the action type and action creater to handle authentication
        ├── questions.js # contains all the action type and action creater to handle anything related to question
        ├── users.js # contains all the action type and action creater to handle anything related to users
        ├── shared.js # contains all the action type and action creater to handle anything if it is related to two or more of the above actions
    ├── components
        ├── 404.js # This file contains the page that is shown if any page is not found
        ├── AnswerCard.js # This file is rendered to allow users to choose options for the poll
        ├── App.js # This is the root of your app. Contains all the routes for this project
        ├── Dashboard.js # This file renders the questionList
        ├── leaderboard.js # This file is rendered to show who is leading in the chart based on the total number of questions asked and questions answered 
        ├── Nav.js # This file is rendered to give us the option to navigate between the pages
        ├── NewQuestion.js # This file is rendered to give us the option to create new polls
        ├── QuestionCard.js # This file contains the formatted UI for each question 
        ├── QuestionList.js # This file is rendered to show all the answered and unanswered polls using tabs 
        ├── ResultsCard.js # This file contains the user's answer along with the percentage of users who voted for each answer
        ├── Signin.js # This file is rendered to allow user to login
    ├── middleware
        ├── index.js # middleware used by index.js for thunk and logger
        ├── logger.js # middleware to show logs
    ├── reducers 
        ├── authedUser.js # Store manipulation related to authentication
        ├── index.js # main reducer file that combines all reducers
        ├── question.js # Store manipulation related to questions
        ├── users.js # Store manipulation related to users
    ├── utils 
        ├── _DATA.js #main backend for the system
    ├── App.scss # Styles for your app. Feel free to customize this as you desire.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


