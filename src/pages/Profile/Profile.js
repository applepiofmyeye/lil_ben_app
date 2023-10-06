import React from 'react'
import CardList from '../../components/CardList/CardList'
import './Profile.css'
import { People } from 'react-ionicons'

export default function Profile() {
  const name = "Joey"
  const username = "@applepiofmyeye"
  const desc = "Hi there! I love to crochet and code :-)"
  const benData = [
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
  ]
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

      <div className='userNameContainer'>
        <h1 className='nameOfUser'>
          {name}
        </h1>
        <p className='usernameOfUser'>
          {username}
        </p>
        <p className='desc'>
          {desc}
        </p>
      </div>
      <h2 className='userOwns'>Joey owns:</h2>
      <div className='benContainer'>
        <CardList cardData={benData}>
        </CardList>

      </div>

    </div>
  )
}
