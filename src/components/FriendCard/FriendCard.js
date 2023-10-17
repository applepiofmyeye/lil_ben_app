import React from 'react'
import './FriendCard.css'

export default function FriendCard({name, desc}) {
  return (
    <div className='friendCardContainer'>
        <h3>{name}</h3>
        <p>{desc}</p>
    </div>
  )
}
