import React, { useState } from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, addToArmy, onBotClick }) {
  const [sortBy, setSortBy] = useState(null);
  const [filterBy, setFilterBy] = useState('All');

  const filteredBots = bots.filter((bot) => {
    if (filterBy === 'All') return true;
    return bot.bot_class === filterBy;
  });

  const sortedBots = [...filteredBots].sort((a, b) => {
    if (sortBy === 'health') return b.health - a.health;
    if (sortBy === 'damage') return b.damage - a.damage;
    if (sortBy === 'armor') return b.armor - a.armor;
    return 0;
  });

  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div>
        <label>
          Filter by Class:
          <select onChange={(e) => setFilterBy(e.target.value)}>
            <option value="All">All</option>
            <option value="Support">Support</option>
            <option value="Medic">Medic</option>
            {/* Add more options based on your bot classes */}
          </select>
        </label>
        <button onClick={() => setSortBy('health')}>Sort by Health</button>
        <button onClick={() => setSortBy('damage')}>Sort by Damage</button>
        <button onClick={() => setSortBy('armor')}>Sort by Armor</button>
      </div>
      <div className="bot-grid">
        {sortedBots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            isInArmy={false} // Assuming no bots are in the army when displayed in the collection
            onAddToArmy={addToArmy}
            handleClick={onBotClick}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;












