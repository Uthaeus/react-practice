import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    in: 'Your Name'
  }

  nameChangeHandler = event => {
    this.setState({ in: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          nameIn={this.state.in}
          changed={this.nameChangeHandler} />
        <UserOutput 
          nameOut={this.state.in} />
      </div>
    );
  }
}

export default App;
