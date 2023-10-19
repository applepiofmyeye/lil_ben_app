import React from 'react';
import BenCard from '../BenCard/BenCard'; // Import your Card component
import './CardList.css'

function CardList({cardData}) {

  return (
    <div className="cardList">
      {cardData.map((ben) => (
        <BenCard
          id={ben.id}
          name={ben.name}
          desc={ben.desc}
        />
      ))}
    </div>
  );
}

export default CardList;