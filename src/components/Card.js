import React, { useState, useEffect } from 'react';
import cardImg from '../assets/images/volopay Burner Card (1).png' 
const Card = (props) => {
  const [card, setCard] = useState(props.cardData);
  return (
    <div key={card.name} className='card'>
        <div className='row'>
            <div className='col'>
                <img className='card-img' src={cardImg} />
            </div>
            <div className='col'>
            <div class="text">
                <h2>{card.name}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                {card.card_type === 'burner' ? <p>Expiry: {card.expiry}</p> : <p>Limit: {card.limit}</p>}
                <button>Get Started</button>
            </div>
        </div>    
    </div>
    </div>
  );
};

export default Card;
