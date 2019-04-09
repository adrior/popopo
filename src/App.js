import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import POLL from "./poll.json";

class App extends Component {
  state = {
    currentQuestion: null
  };

  next = () => {
    let cq = this.state.currentQuestion;
    if (cq === null) {
      cq = 0;
    } else {
      cq++;
    }
    this.setState({ currentQuestion: cq });
  };

  render() {
    return (
      <div className="App">
        {this.state.currentQuestion === null && (
          <div className="App__intro">
            <h2>{POLL.intro.title}</h2>
            <div onClick={this.next}>{POLL.intro.descr}</div>
          </div>
        )}
        {this.state.currentQuestion !== null &&
          this.state.currentQuestion < POLL.questions.length && (
            <div className="App__quesion">
              <h2>{POLL.questions[this.state.currentQuestion].descr}</h2>
              <div>
                {POLL.questions[this.state.currentQuestion].answers.map(ans => (
                  <div onClick={this.next}>{ans.descr}</div>
                ))}
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default App;
