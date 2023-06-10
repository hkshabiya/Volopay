import React, { useState, useEffect } from 'react';

const Card = (props) => {
  const [card, setCard] = useState(props.cardData);
  return (
    <div key={card.name}>
        <h2>{card.name}</h2>
        <p>{card.budget_name}</p>
        <p>{card.card_type}</p>
        {card.card_type === 'burner' ? <p>Expiry: {card.expiry}</p> : <p>Limit: {card.limit}</p>}
    </div>
  );
};

export default Card;
