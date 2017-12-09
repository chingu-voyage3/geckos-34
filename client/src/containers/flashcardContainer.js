import React, { Component } from 'react';
import '../App.css';
import Flashcard from '../components/flashcard';

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
  render() {
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
