import React from 'react'
import CardList from '../../components/CardList/CardList'
import './Profile.css'
import { Link } from 'react-router-dom';

export default function Profile() {
  const name = "Joey"
  const username = "@applepiofmyeye"
  const desc = "Hi there! I love to crochet and code :-)"
  const benData = [
    {
      id: 'hoodie_lil_ben',
      name: 'Hoodie Lil Ben',
      desc: "Meet Hoodie Lil Ben, the ultimate champion of comfort and coziness! 💤🌙 This little guy has a profound love for his trusty hoodie - you could say he's practically inseparable from it. While the rest of the Lil Ben crew is out and about, Hoodie Lil Ben's motto is 'Why go out when you can stay in?' 😴"
    },
    {
      id: 'birthday_lil_ben',
      name: 'Birthday Lil Ben',
      desc: "Can you guess Birthday Ben's favorite suit? it's..... his birthday suit.. :0 while partly because Birthday Ben is always in the mood to party, but he just finds Singapore wayyy too hot lah. He will complain complain and complain.. but I mean.. who doesnt? Walking around half naked all the time, this Lil Ben DEFINITELY gets some stares.. but hot ahh cannot tahan, stare then stare lor"
    },
    {
      id: 'bens_dreamhouse',
      name: "'It's BEN'S dreamhouse!!!'",
      desc: "BENough Lil Ben lives in his cute little ‘mojo dojo casa HDB’ and dreams of riding dragons and fighting space battles! BENough Lil Ben is in the process of believing he is BENough, and he teaches his other Lil Ben friends the same too! BENough Lil Ben’s motto is ‘You don’t need a zabor to make you happy!’"
    }
  ]

  return (
    <div className='profileMainContainer'>
      <Link to="/friendsPage">
        {/* <People 
          color={'#297381'}
          height="40px"
          width="40px" 
          cssClasses="friendsLogo"/>  */}
      </Link>
      
           
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
        <p className='descOfUser'>
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
