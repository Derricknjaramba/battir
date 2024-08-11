import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './styles.css';

function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    if (!yourBotArmy.some(b => b.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    setYourBotArmy(yourBotArmy.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
    }).then(() => {
      setYourBotArmy(yourBotArmy.filter(b => b.id !== bot.id));
      setBots(bots.filter(b => b.id !== bot.id));
    });
  };

  return (
    <div className="App">
      <YourBotArmy
        bots={yourBotArmy}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
      <BotCollection 
        bots={bots} 
        addToArmy={enlistBot} 
        onBotClick={() => {}} // Update if needed
      />
    </div>
  );
}

export default App;