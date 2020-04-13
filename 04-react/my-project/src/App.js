import React, { Component } from 'react';
import './App.css';
import { Clock } from './Clock';

class App extends Component {
  state = {
    isClockHidden: false
  } 

  hideClock = () => {
    this.setState({ isClockHidden: true })
  }

  render() {
    if (this.state.isClockHidden) {
      return <h1>Clock is hidden</h1>
    }

    return (
      <div>
        <button onClick={this.hideClock}>Hide Clock</button>
        <Clock />
      </div>
    );
  }
}

export default App;
