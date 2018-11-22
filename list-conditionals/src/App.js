import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {

  state = {
    input: 'Enter Input Here'
  }

  inputChangedHandler = (event) => {
    this.setState({input: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <input type='text' value={this.state.input} className='input' onChange={this.inputChangedHandler} />
        <ValidationComponent len={this.state.input.length} />
      </div>
    );
  }
}

export default App;
