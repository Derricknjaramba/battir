// src/containers/BotCollection.js
import React from 'react';
import BotCard from '../components/BotCard';

const BotCollection = ({ bots, onAddToArmy }) => {
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard
          key={bot.id}
          bot={bot}
          onAdd={() => onAddToArmy(bot)}
        />
      ))}
    </div>
  );
};

export default BotCollection;












