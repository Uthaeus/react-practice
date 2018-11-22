import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {

  state = {
    input: 'Enter Input Here'
  }


  render() {
    return (
      <div className="App">
        <input type='text' value={this.state.input} className='input' />
        <ValidationComponent len={this.state.input.length} />
      </div>
    );
  }
}

export default App;
