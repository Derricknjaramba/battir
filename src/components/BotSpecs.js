import React from 'react';
import './BotSpecs.css'; // Importing the CSS for styling

function BotSpecs({ bot, onClose }) {
  return (
    <div className="bot-specs-modal">
      <div className="bot-specs">
        <h2>{bot.name}</h2>
        <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Class: {bot.bot_class}</p>
        <p>Catchphrase: {bot.catchphrase}</p>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
}

export default BotSpecs;


