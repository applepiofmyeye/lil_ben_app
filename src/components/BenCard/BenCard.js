import React from 'react'
import './BenCard.css'

export default function BenCard({id, name}) {
  return (
    <div className="benCardContainer">
        <div className='benImageContainer'>
            <img className='benImage' src={`/assets/images/${id}`}/>
        </div>
        <div className='benName'>
            <p>{name}</p>
        </div>

    </div>
  )
}
