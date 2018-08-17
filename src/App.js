import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import createProject from './queries/createProject';

class App extends Component {
  componentDidMount() {
    fetch('/api/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        createProject({
          name: 'App project',
          description: 'Desc',
          collectionId: '1',
          tasks: [{ name: 'Testing Woo', description: 'hell' }],
        }),
      ),
    })
      .then(result => result.json())
      .then(json => {
        console.log(json);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
