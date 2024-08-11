// src/containers/BotPage.js
import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const BotPage = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8002/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const addBotToArmy = (bot) => {
    setArmy([...army, bot]);
  };

  const removeBotFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setArmy(army.filter(b => b.id !== bot.id));
          setBots(bots.filter(b => b.id !== bot.id));
        }
      });
  };

  return (
    <div>
      <YourBotArmy bots={army} onRemove={removeBotFromArmy} onDischarge={dischargeBot} />
      <BotCollection bots={bots} onAddToArmy={addBotToArmy} />
    </div>
  );
};

export default BotPage;




