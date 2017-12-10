import React, { Component } from 'react';
import '../App.css';
import Flashcard from '../components/flashcard';
import CardForm from '../components/cardform';
import FlashcardContainer from '../containers/flashcardContainer';

import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC7V5veRLtF7F2RbVYGEKN3_3CDzdzlsP0",
    authDomain: "voyageflashcards.firebaseapp.com",
    databaseURL: "https://voyageflashcards.firebaseio.com",
    projectId: "voyageflashcards",
    storageBucket: "voyageflashcards.appspot.com",
    messagingSenderId: "902467180091"
  };
  var fire = firebase.initializeApp(config);
//login to firebase
var email = 'tony@mrbrackins.com';
var password = 'P@ssword1';






var currentUser = fire.auth().currentUser;


class logincomponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: ''

      };


  }
  componentDidMount(){
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((response) => this.setState({user: response}))
  }
  render() {
    return (
      <div className="logincomponent">
        <CardForm />
      <FlashcardContainer currentUser={this.state.user} />

      </div>
    );
  }
}

export default logincomponent;
