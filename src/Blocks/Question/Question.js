import Answer from "../Answer/Answer.js";
import "./Question.scss";
import React from "react";
import NextButton from "../NextButton/NextButton.js";

export default class Question extends React.Component {
  state = {
    selected: null,
    result: null
  };

  handleAnswer = (title, score) => {
    this.setState({ selected: title, score: score });
  };

  handleNext = () => {
    this.setState({ selected: null });
    this.props.handleNext(this.state.score);
  };

  getStatus = title => {
    if (this.state.selected === null) {
      return "closed";
    } else if (this.state.selected === title) {
      return "open";
    } else {
      return "disabled";
    }
  };

  render() {
    return (
      <div className="Question">
        {this.props.title && (
          <div className="Question__title">{this.props.title}</div>
        )}
        {this.props.image && (
          <img
            alt={this.props.title}
            className="Question__image"
            src={this.props.image}
          />
        )}
        <div className="Question__answers">
          {this.props.answers.map(el => (
            <Answer
              key={el.title}
              handleClick={this.handleAnswer}
              title={el.title}
              descr={el.descr}
              score={el.score}
              status={el.status}
              state={this.getStatus(el.title)}
            />
          ))}
        </div>
        {this.state.selected !== null && (
          <div className="Question__next">
            <NextButton handleClick={this.handleNext} theme="action">
              {this.props.action}
            </NextButton>
          </div>
        )}
      </div>
    );
  }
}
