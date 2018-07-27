import React, { Component } from "react";
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
        <div id="p2"><p>QuizMe is a fun way to test your knowledge of any subject you want.</p>
          <br></br>
          <p>Take the quizzes already submitted and submit one of your own for the rest of the class.</p></div>


        </div>

    );
  }
}

export default Home;