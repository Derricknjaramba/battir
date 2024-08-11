// src/components/BotCard.js
import React from 'react';

const BotCard = ({ bot, onAdd }) => {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>{bot.catchphrase}</p>
      <button onClick={onAdd}>Add to Army</button>
    </div>
  );
};

export default BotCard;



