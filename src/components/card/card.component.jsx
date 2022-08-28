import React from "react"

import './card.styles.css'

const Card = ({ kitten }) => {
  const { name, email } = kitten
  const id = Math.floor(Math.random() * 100)

  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set4&size=150x150`}
        alt="cartoon cats"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card
