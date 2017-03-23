import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAf4BfnkoO7Em0-KoPuzW1OQW6p1eeJG9w",
  authDomain: "react-fire-tree-course.firebaseapp.com",
  databaseURL: "https://react-fire-tree-course.firebaseio.com",
  storageBucket: "react-fire-tree-course.appspot.com",
  messagingSenderId: "624055152138"
};

const db = firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fbData: 'Look here to see the magic !!'
    }
  }
  componentDidMount() {
    this.globalRef = db.database().ref('data/');
    this.globalRef.on('value', (data) => {
      this.setState({ fbData: data })
    });
  }
  componentWillUnmount() {
    this.globalRef.off();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {JSON.stringify(this.state.fbData)}
        </p>
      </div>
    );
  }
}

export default App;
