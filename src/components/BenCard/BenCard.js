import React from 'react'
import './BenCard.css'

export default function BenCard({id, name, desc}) {
  return (
    <div className="benCardContainer">
        <div className='benImageContainer'>
            <img className='benImage' src={`/assets/images/${id}.png`}/>
        </div>
        <div className='benName'>
            <p>{name}</p>
        </div>
        <p>{desc}</p>
    </div>
  )
}
