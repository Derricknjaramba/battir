import React from 'react';

function BotCard({ bot, handleClick, dischargeBot, isInArmy, onAddToArmy }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {isInArmy ? (
        <>
          <button onClick={() => handleClick(bot)}>Release</button>
          <button onClick={() => dischargeBot(bot)}>Discharge</button>
        </>
      ) : (
        <button onClick={() => onAddToArmy(bot)}>Add to Army</button>
      )}
    </div>
  );
}

export default BotCard;



