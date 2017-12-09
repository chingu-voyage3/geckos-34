import React, { Component } from 'react';
import '../App.css';
import firebase from 'firebase';

class cardform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''

      };


  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }
  handleDescChange(event) {
    this.setState({description: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = this.state.title;
    const desc = this.state.description;
    console.log('handle submit')
    console.log(title)
    // send to firebase
    const {currentUser} = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/cards`)
    .push({
    title : title,
    desc: desc
    })

    // alert('A name was submitted: ' + this.state.value);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Title:
          <input type="text" value={this.state.value} onChange={this.handleTitleChange.bind(this)} />
        </label>
        <label>
          Description:
          <input type="text" value={this.state.value} onChange={this.handleDescChange.bind(this)} />
        </label>

        <button  value="Submit" onClick={this.handleSubmit.bind(this)} />
      </form>
    );
  }
}

export default cardform;
