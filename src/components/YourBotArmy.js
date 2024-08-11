// src/containers/YourBotArmy.js
import React from 'react';
import BotCard from '../components/BotCard';

const YourBotArmy = ({ bots, onRemove, onDischarge }) => {
  return (
    <div className="your-bot-army">
      {bots.map(bot => (
        <div key={bot.id} className="bot-card-container">
          <BotCard bot={bot} />
          <button onClick={() => onRemove(bot)}>Remove from Army</button>
          <button onClick={() => onDischarge(bot)}>Discharge Bot</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;





