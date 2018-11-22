import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    input: 'Enter Input Here'
  }

  inputChangedHandler = (event) => {
    this.setState({input: event.target.value});
  }

  charRemovedHandler = (event, index) => {
    let characters = this.state.input.split('').splice(index, 1).join('');

    this.setState({input: characters});
  }

  render() {
    let chars = this.state.input.split('').map((c, index) => {
      return (
        <CharComponent char={c} changed={(event) => this.charRemovedHandler(index)} />
      );
    })

    return (
      <div className="App">
        <input type='text' value={this.state.input} className='input' onChange={this.inputChangedHandler} />
        <ValidationComponent len={this.state.input.length} />
        <h1>{this.state.input}</h1>
        {chars}
      </div>
    );
  }
}

export default App;
