import React from 'react'
import CardList from '../../components/CardList/CardList'
import './Profile.css'
import { People } from 'react-ionicons'

export default function Profile() {
  const name = "Joey"
  const username = "@applepiofmyeye"
  const desc = "Hi there! I love to crochet and code :-)"
  return (
    <div className='profileMainContainer'>
      <People 
        color={'#297381'}
        height="40px"
        width="40px" 
        cssClasses="friendsLogo"/> 
           
      <div className='profilePhotoContainer'>
      
        <img className="profilePhoto" src="/assets/images/_.jpeg" alt="Example" />
      </div>

      <div className='userName'>
        <h1>
          {name}
        </h1>
        <p>
          {username}
        </p>
        <p>
          {desc}
        </p>
      </div>

      <div className='benContainer'>
        <CardList cardData={[
          {
            id: '_.jpeg',
            name: 'Spiderman Lil Ben'
          },
          {
            id: '_.jpeg',
            name: 'Gangster Lil Ben'
          },
          {
            id: '_.jpeg',
            name: 'Jedi Lil Ben'
          }
        ]}>

        </CardList>

      </div>

    </div>
  )
}
