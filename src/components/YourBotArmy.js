// src/containers/YourBotArmy.js
import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ bots, releaseBot, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={releaseBot}
            dischargeBot={dischargeBot}
            isInArmy={true} // Indicate that bots are in the army
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;





