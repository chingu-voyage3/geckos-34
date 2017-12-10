import React, { Component } from 'react';
import '../App.css';
import Flashcard from '../components/flashcard';
import firebase from 'firebase'
import _ from 'lodash';


var email = "tony@mrbrackins.com";
var password = "P@ssword1";
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
      currentUser: false,
      data: [{
        title: 'title',
        desc: 'desc'
      }]

      };


  }

  componentWillMount(){

    // NEED CURRENT USER HERE BUT ITS SHOWING AS NULL
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    console.log(user)
    this.setState({currentUser: user})
    console.log(this.state)

  })

  }

  componentDidMount(){
    console.log('state current user')
    console.log(this.state.currentUser)


    firebase.database().ref(`/users/${this.state.currentUser.uid}/cards`)
  .once('value', (snapshot) => {
    var results = snapshot.val();
    this.setState({data: results})
  })

  console.log(this.state.data)

  }

  handleClick(e){
    console.log(this.props)
  }





  render() {
if(this.state.currentUser){
  console.log('shit working!')
}

var thedata = [{
  title: 'yo',
  desc: 'desc'
}]

firebase.database().ref(`/users/${this.state.currentUser.uid}/cards`)
            .once('value', (snapshot) => {
                var payload = snapshot.val()
                console.log(payload)

_.map(payload, (val, uid) => {
  console.log(val)

  this.setState({
  data: this.state.data.concat([{ title: val.title, desc: val.desc}])
})





        // return { ...val, uid }; // { shift: 'Monday', name: 'Tony', id: '12321'};
    })
    // this.setState({data: thedata})

 }
            )
    return(
    this.state.data.map(function(item, i){
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
