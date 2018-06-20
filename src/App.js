import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import NameForm from './NameForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          <Welcome name='Sarah' />
          <Welcome name='William' />
          <Welcome />

          <NameForm/>
        </p>
      </div>
    );
  }
}

export default App;
