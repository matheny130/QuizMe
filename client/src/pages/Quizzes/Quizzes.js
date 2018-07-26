import React, { Component } from 'react';
import QuizBox from "../../components/QuizBox/QuizBox";
// import data from "../../data.json";
import Container from "../../components/Container/Container";
import QuizAPI from "../../utils/QuizAPI";
import "./Quizzes.css"
import Jumbotron from "../../components/Jumbotron/Jumbotron"

class Quizzes extends Component {
  state = {
    quizzes: []
  }

  componentDidMount() {
    this.loadQuizzes();

  };

  loadQuizzes() {
    QuizAPI.getQuizzes()
    .then(res =>
      this.setState({
        quizzes: res.data})
    )
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="background">
        <Jumbotron />
        <br></br>
        <Container>
          <div className="row">
            {this.state.quizzes.map(item => (
              <QuizBox
                key={item._id}
                id={item._id}
                quizTitle={item.quizTitle}
              />
            ))}
          </div>
        </Container>

      </div>
    );
  }
}

export default Quizzes;