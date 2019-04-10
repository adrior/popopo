import React, { Component } from "react";
import "./App.css";
import POLL from "./poll.json";

class App extends Component {
  state = {
    currentQuestion: null,
    score: {}
  };

  next = score => {
    let cq = this.state.currentQuestion;
    if (cq === null) {
      cq = 0;
    } else {
      cq++;
    }
    if (score) {
      let scoreState = { ...this.state.score };
      Object.entries(score).forEach(sc => {
        if (scoreState[sc[0]] === undefined) scoreState[sc[0]] = 0;
        scoreState[sc[0]] += sc[1];
      });
      this.setState({ score: scoreState });
    }
    this.setState({ currentQuestion: cq });
  };

  render() {
    return (
      <div className="App">
        {this.state.currentQuestion === null && (
          <div className="App__intro">
            <h2>{POLL.intro.title}</h2>
            <div onClick={() => this.next(null)}>{POLL.intro.descr}</div>
          </div>
        )}
        {this.state.currentQuestion !== null &&
          this.state.currentQuestion < POLL.questions.length && (
            <div className="App__quesion">
              <h2>{POLL.questions[this.state.currentQuestion].descr}</h2>
              <div>
                {POLL.questions[this.state.currentQuestion].answers.map(ans => (
                  <div
                    key={ans.text}
                    onClick={() => {
                      console.log(ans.score);
                      this.next(ans.score);
                    }}
                  >
                    {ans.descr}
                  </div>
                ))}
              </div>
            </div>
          )}
        {this.state.currentQuestion !== null &&
          this.state.currentQuestion === POLL.questions.length && (
            <div className="App__final">
              Final
              <pre>
                {Object.entries({ ...this.state.score }).map(el => (
                  <div>{`${el[0]} → ${el[1]}`}</div>
                ))}
              </pre>
            </div>
          )}
      </div>
    );
  }
}

export default App;
