import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlashcardContainer from './containers/flashcardContainer';
import CardForm from './components/cardform';
import firebase from 'firebase';

// // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyC7V5veRLtF7F2RbVYGEKN3_3CDzdzlsP0",
//     authDomain: "voyageflashcards.firebaseapp.com",
//     databaseURL: "https://voyageflashcards.firebaseio.com",
//     projectId: "voyageflashcards",
//     storageBucket: "voyageflashcards.appspot.com",
//     messagingSenderId: "902467180091"
//   };
// firebase.initializeApp(config);




class App extends Component {
  render() {
    return (
      <div className="App">
        <CardForm />
      <FlashcardContainer />
      </div>
    );
  }
}

export default App;
