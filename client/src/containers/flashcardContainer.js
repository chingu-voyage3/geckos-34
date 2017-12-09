import React, { Component } from 'react';
import '../App.css';
import Flashcard from '../components/flashcard';
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
fire.auth().signInWithEmailAndPassword(email, password)
  .then(function(user) {
    console.log(user)

  })

var currentUser = fire.auth().currentUser;



const data = [
  {
  title: 'Flashcard 1',
  desc: 'Drumstick jowl filet mignon turducken turkey pork loin, beef ribs spare ribs andouille bresaola meatball short loin kevin flank cupim. Tongue prosciutto drumstick fatback jerky tenderloin kielbasa pork chop shoulder bacon.'
},

{
title: 'Flashcard 2',
desc: 'Drumstick jowl filet mignon turducken turkey pork loin, beef ribs spare ribs andouille bresaola meatball short loin kevin flank cupim. Tongue prosciutto drumstick fatback jerky tenderloin kielbasa pork chop shoulder bacon.'
},

{
title: 'Flashcard 3',
desc: 'Drumstick jowl filet mignon turducken turkey pork loin, beef ribs spare ribs andouille bresaola meatball short loin kevin flank cupim. Tongue prosciutto drumstick fatback jerky tenderloin kielbasa pork chop shoulder bacon.'
},



]

class flashcardContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: ''

      };


  }

  componentWillMount(){

    // NEED CURRENT USER HERE BUT ITS SHOWING AS NULL
    console.log(currentUser)
    console.log('from component will moutn')
  }

  render() {



if(currentUser){

  //NEED CURRENT USER HERE TOO BUT SHOWING NUL
  console.log('current user exists...')
} else {
  console.log('current user doe not exists...')
}

    return(
    data.map(function(item, i){
      return (

        <div>

          <Flashcard title={item.title} description={item.desc} />
        </div>
      );
    })
  )

  }
}

export default flashcardContainer;
