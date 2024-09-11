import React, { useState } from 'react'
// import minionImage from '../assets/minion.jpg'
// import littleMargo from '../assets/littleMargo.jpg'
// import Mona from '../assets/Mona.jpg'

export default function Card(props) {

  const cards = props.data

  // const [card] = useState([
  //   {
      
  //     altText : "Card one",
  //     image : minionImage,
  //     title : "Minion",
  //     text : "I am a Minion"
  //   },
  //   {
  //     altText : "Card two",
  //     image : littleMargo,
  //     title : "Margo",
  //     text : "I am a Margo"
  //   },
  //   {
  //     altText : "Card three",
  //     image : Mona,
  //     title : "Mona",
  //     text : "I am Mona"
  //   },

  // ])
  return (
    <div >
        {
          cards.map((cards, i)=> (
            <div className="card" key= {i}>
            <img className="card-image" src={cards.image} alt={cards.altText}></img>

            <h2 className="card-title">{cards.title}</h2>

            <p className="card-text">{cards.text}</p>
            </div>
          ))
        } 
        

    </div> 
  )
}
