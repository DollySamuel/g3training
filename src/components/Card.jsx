import React, { useState } from 'react'
import minionImage from '../assets/minion.jpg'

export default function Card() {

  const [cards] = useState([
    {
      altText : "Card one",
      title : "Minion",
      text : "I am a Minion"
    },
    {
      altText : "Card two",
      title : "Margo",
      text : "I am a Margo"
    },
    {
      altText : "Card three",
      title : "Mona",
      text : "I am Mona"
    },

  ])
  return (
    <div >
        {
          cards.map((card, i)=> (
            <div className="card" key= {i}>
            <img className="card-image" src={minionImage} alt={card.altText}></img>

            <h2 className="card-title">{card.title}</h2>

            <p className="card-text">{card.text}</p>
            </div>
          ))
        }
        

    </div> 
  )
}
