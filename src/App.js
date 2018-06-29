import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0
  }

  textLengthChangeHandler = (event) => {
    const inputText = event.target.value;
    this.setState({counter: inputText.length});
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.textLengthChangeHandler} />
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default App;
