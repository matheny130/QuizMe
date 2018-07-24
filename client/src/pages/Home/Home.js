import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Home.css"


class Home extends Component {
  state = {
    homes: [],

  };
  render() {
    return (


        <div className="background">
          <br></br>
        <div id="p1"><p>Welcome to QuizMe</p></div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        <div id="p2"><p>Visit the <Link to="/quizzes">View Quizzes</Link> page to take a quiz</p>
          <br></br>
          <p>Visit the <Link to="/newquiz">Create A Quiz</Link> page to create a quiz for others to take</p></div>


        </div>

    );
  }
}

export default Home;