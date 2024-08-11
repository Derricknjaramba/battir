import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

const App = () => {
  const [botArmy, setBotArmy] = useState([]);

  const handleEnlist = (bot) => {
    setBotArmy((prevArmy) => [...prevArmy, bot]);
  };

  const handleRelease = (bot) => {
    setBotArmy((prevArmy) => prevArmy.filter((b) => b.id !== bot.id));
  };

  const handleDelete = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE',
    }).then(() => {
      setBotArmy((prevArmy) => prevArmy.filter((b) => b.id !== bot.id));
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Bot Battlr</h1>
      <BotCollection onEnlist={handleEnlist} />
      <YourBotArmy
        bots={botArmy}
        onRelease={handleRelease}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;