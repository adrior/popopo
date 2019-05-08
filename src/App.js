import React, { Component } from "react";
import Quiz from "./Blocks/Quiz/Quiz.js";
import "./App.scss";
import POLL from "./poll-grades.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quiz json={POLL} />
      </div>
    );
  }
}

export default App;
