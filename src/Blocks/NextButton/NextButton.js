import "./NextButton.scss";
import React from "react";

export default class NextButton extends React.Component {
  render() {
    return (
      <button
        className={`NextButton ${this.props.theme &&
          "NextButton_theme_" + this.props.theme}`}
        onClick={this.props.handleClick}
      >
        {this.props.children}
      </button>
    );
  }
}
