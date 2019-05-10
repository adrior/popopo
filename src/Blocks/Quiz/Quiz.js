import "./Quiz.scss";
import React from "react";
import Intro from "../Intro/Intro";
import Question from "../Question/Question";

export default class Quiz extends React.Component {
  state = {
    currentQuestion: null,
    score: {}
  };

  checkResults_numberOfCorrect = () => {
    let score = this.state.score.count;
    let results = this.props.json.results;
    let nearest = null;
    let i = 0;
    while (!(nearest = results[score]) && i < 100) {
      score--;
      i++;
    }
    this.setState({ result: nearest });
  };

  checkResults_mostRelevant = () => {
    let score = this.state.score;
    let maxKey = Object.keys(score).reduce((a, b) =>
      score[a] > score[b] ? a : b
    );
    this.setState({ result: this.props.json.results[maxKey] });
  };

  checkResults = () => {
    let methodName = "checkResults_" + this.props.json.config.strategy;
    this[methodName]();
  };

  handleNext_numberOfCorrect = score => {
    let prevScore = { ...this.state.score };
    if (prevScore.count === undefined) {
      prevScore.count = 0;
    }
    if (score) {
      prevScore.count += score;
      this.setState({ score: prevScore });
    }
  };

  handleNext_mostRelevant = score => {
    if (score) {
      let prevScore = { ...this.state.score };
      for (let i in score) {
        if (!prevScore[i]) prevScore[i] = 0;
        prevScore[i] += score[i];
      }
      this.setState({ score: prevScore });
    }
  };

  handleNext = score => {
    let currentQuestion = this.state.currentQuestion;
    if (currentQuestion !== null) {
      let methodName = "handleNext_" + this.props.json.config.strategy;
      this[methodName](score);
      if (currentQuestion + 1 > this.props.json.questions.length) {
        setTimeout(this.checkResults, 0);
      }
    }
    this.setState({ currentQuestion: currentQuestion + 1 });
  };

  render() {
    let content = null;
    if (this.props.json) {
      if (this.state.currentQuestion === null) {
        content = (
          <Intro
            title={this.props.json.intro.title}
            descr={this.props.json.intro.descr}
            action={this.props.json.intro.action}
            handleAction={this.handleNext}
          />
        );
      } else if (
        this.state.currentQuestion <= this.props.json.questions.length
      ) {
        let question = this.props.json.questions[
          this.state.currentQuestion - 1
        ];
        content = (
          <Question
            title={question.title}
            answers={question.answers}
            handleNext={this.handleNext}
            action={
              this.state.currentQuestion === this.props.json.questions.length
                ? "Узнать результат"
                : "Следующий вопрос"
            }
          />
        );
      } else if (this.state.result !== undefined) {
        content = <div>{this.state.result.title}</div>;
      }
    }
    return (
      <div className="Quiz">
        {content}
        {this.props.children}
      </div>
    );
  }
}
