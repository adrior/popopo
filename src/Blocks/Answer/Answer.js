import "./Answer.scss";
import React from "react";

export default class Answer extends React.Component {
  render() {
    let state = this.props.state && `Answer_state_${this.props.state}`;
    let status = this.props.status && `Answer_status_${this.props.status}`;
    return (
      <div
        className={`Answer ${state} ${status}`}
        onClick={() => {
          if (this.props.handleClick && this.props.state === "closed") {
            this.props.handleClick(this.props.title, this.props.score);
          }
        }}
      >
        <div className="Answer__title">{this.props.title}</div>
        <div className="Answer__fold">
          {this.props.descr && (
            <div className="Answer__descr">{this.props.descr}</div>
          )}
          {this.props.image && (
            <img
              alt={this.props.title}
              className="Answer__image"
              src={this.props.image}
            />
          )}
        </div>
      </div>
    );
  }
}
