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
  fire.auth().signInWithEmailAndPassword('tony@mrbrackins.com', 'P@ssword1')
  .then(
    function(){
      console.log('successfully logged in')
    });
    
  const {currentUser} = fire.auth();
  export default {
    fire: fire,
    currentUser: currentUser
  };
