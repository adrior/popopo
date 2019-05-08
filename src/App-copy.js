import React, { Component } from "react";
import Intro from "./Blocks/Intro/Intro.js";
import "./App.scss";
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
        <div className="App__container">
          {this.state.currentQuestion === null && (
            <Intro
              title="Helvetica Now"
              subtitle="Переиздание шрифта спустя 30 лет"
              descr="Helvetica Now was designed by Max Miedinger, Charles Nix, Monotype Studio, Jan Hendrik Weber and published by Monotype in 2019. Helvetica Now contains 48 styles and family package options. The font is currently #1 in Best Sellers, and #1 in Hot New Fonts. More about this family"
              image="http://www.graphis.com/media/uploads/cfe/entry/8982e5f0-bc90-11e2-adeb-f23c91dffdec/Helvetica_Now_1.jpg"
              action="Вперде!"
              handleAction={() => this.next(null)}
            />
          )}
          {this.state.currentQuestion !== null &&
            this.state.currentQuestion < POLL.questions.length && (
              <div className="App__quesion">
                <h2>{POLL.questions[this.state.currentQuestion].descr}</h2>
                <div>
                  {POLL.questions[this.state.currentQuestion].answers.map(
                    ans => (
                      <div
                        key={ans.text}
                        onClick={() => {
                          console.log(ans.score);
                          this.next(ans.score);
                        }}
                      >
                        {ans.descr}
                      </div>
                    )
                  )}
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
      </div>
    );
  }
}

export default App;
