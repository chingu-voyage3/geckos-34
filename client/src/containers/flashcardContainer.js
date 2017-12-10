import React, { Component } from 'react';
import '../App.css';
import Flashcard from '../components/flashcard';
import firebase from 'firebase'
import _ from 'lodash';


var email = "tony@mrbrackins.com";
var password = "P@ssword1";


class flashcardContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: false,
      data: []

      };


  }

  componentWillMount(){

    // NEED CURRENT USER HERE BUT ITS SHOWING AS NULL
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    console.log(user)

    console.log(this.state)

    firebase.database().ref(`/users/${user.uid}/cards`)
  .on('value', (snapshot) => {
    var results = snapshot.val();

    _.map(results, (val, uid) => {
      console.log(val)

      var newArray = this.state.data.slice();
        newArray.push({ title: val.title, desc: val.desc});
        this.setState({data:newArray})

    //   this.setState({
    //   data: this.state.data.concat([{ title: val.title, desc: val.desc}])
    // })





            // return { ...val, uid }; // { shift: 'Monday', name: 'Tony', id: '12321'};
        })
    // this.setState({data: results})
    console.log('theresults')
    console.log(results[0])
  })

  })
}

  componentDidMount(){
    console.log('state current user')
    console.log(this.state.currentUser)




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
            .on('value', (snapshot) => {
                var payload = snapshot
                console.log(payload)

_.map(payload.val(), (val, uid) => {
  console.log(val)

  var newArray = this.state.data.slice();
    newArray.push({ title: val.title, desc: val.desc});
    this.setState({data:newArray})

//   this.setState({
//   data: this.state.data.concat([{ title: val.title, desc: val.desc}])
// })





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
