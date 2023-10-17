import React from 'react'
import FriendCard from '../../components/FriendCard/FriendCard'
import NavBar from '../../components/NavBar/NavBar'

export default function FriendsPage() {
  const friends = [
    {
      name: "Chloe",
      desc: ":x",
      key: 0
    },
    {
      name: "Benedict",
      desc: "achOOO",
      key: 1

    }]
  return (
    <div>
      <h2>Lil Ben Pals</h2>
      {friends.map((friend) => 
        <FriendCard
          name={friend.name}
          desc={friend.desc}/>)}
    </div>
  )
}
