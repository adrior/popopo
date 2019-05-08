import "./Intro.scss";
import React from "react";
import NextButton from "../NextButton/NextButton";

export default class Intro extends React.Component {
  render() {
    return (
      <div className="Intro">
        {this.props.title && (
          <div className="Intro__title">
            {this.props.title}
            {this.props.subtitle && <span> {this.props.subtitle}</span>}
          </div>
        )}
        {this.props.descr && <p>{this.props.descr}</p>}
        {this.props.image && (
          <img alt={this.props.title} src={this.props.image} />
        )}
        <div className="Intro__action">
          <NextButton handleClick={this.props.handleAction} theme="action">
            {this.props.action}
          </NextButton>
        </div>
      </div>
    );
  }
}
