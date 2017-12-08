import React, { Component } from 'react';
import '../App.css';
import Flashcard from '../components/flashcard';

class flashcardContainer extends Component {
  render() {
    return (
      <div className="flashcard">
        <div className="container">
          <h2>{this.props.title}</h2>
          <hr className="hr_style"></hr>
          <div className="description">
            <p>{this.props.description}
            </p>

          </div>

        </div>

      </div>
    );
  }
}

export default flashcardContainer;
