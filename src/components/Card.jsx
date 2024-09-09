import React from 'react'
import minionImage from '../assets/minion.jpg'

export default function Card(props) {
  return (
    <div className="card">
        <img className="card-image" src={minionImage} alt="profile picture"></img>

        <h2 className="card-title">{props.title}</h2>

        <p className="card-text">{props.text}</p>

    </div> 
  )
}
