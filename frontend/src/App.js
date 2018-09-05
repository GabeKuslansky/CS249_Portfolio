import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      homeworks: []
    }
  }

  render() {
    return (
      <div className="App">
        <p>Assignment1.jar</p>
        <p>Assignment2.jar</p>
        <p>Assignment3.jar</p>
      </div>
    );
  }
}

export default App;
