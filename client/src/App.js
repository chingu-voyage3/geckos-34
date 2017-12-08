import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlashcardContainer from './containers/flashcardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <FlashcardContainer />
      </div>
    );
  }
}

export default App;
