import "./Quiz.scss";
import React from "react";
import Intro from "../Intro/Intro";
import Question from "../Question/Question";

export default class Quiz extends React.Component {
  state = {
    currentQuestion: null,
    score: {}
  };

  checkResults = () => {
    let strategy = this.props.json.resutlsStrategy || "grades";
    if (strategy === "chooseFromList") {
      let score = this.state.score;
      let maxKey = Object.keys(score).reduce((a, b) =>
        score[a] > score[b] ? a : b
      );
      console.log(maxKey, this.props.json.results[maxKey]);
    } else if (strategy === "grades") {
      console.error(`There is no «${strategy}» strategy defined`);
    } else {
      console.error(`There is no «${strategy}» strategy defined`);
    }
  };

  handleNext = score => {
    if (score) {
      let prevScore = this.state.score;
      for (let i in score) {
        if (!prevScore[i]) prevScore[i] = 0;
        prevScore[i] += score[i];
      }
      this.setState({ score: score });
    }
    if (this.state.currentQuestion === this.props.json.questions.length) {
      this.checkResults(this.state.score);
    } else {
      this.setState({ currentQuestion: this.state.currentQuestion + 1 });
    }
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
      } else {
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
