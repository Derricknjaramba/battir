import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './styles.css';

function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch(`${API_URL}/bots`);
        const contentType = response.headers.get('content-type');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setBots(data);
        } else {
          throw new Error('Expected JSON but received: ' + contentType);
        }
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Always set loading to false
      }
    };

    fetchBots();
  }, [API_URL]);

  const enlistBot = (bot) => {
    if (!yourBotArmy.some(b => b.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    setYourBotArmy(yourBotArmy.filter(b => b.id !== bot.id));
  };

  const dischargeBot = async (bot) => {
    try {
      const response = await fetch(`${API_URL}/bots/${bot.id}`, {
        method: 'DELETE',
      });
      const contentType = response.headers.get('content-type');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      if (contentType && contentType.includes('application/json')) {
        await response.json(); // Ensure the server responds with JSON
        setYourBotArmy(yourBotArmy.filter(b => b.id !== bot.id));
        setBots(bots.filter(b => b.id !== bot.id));
      } else {
        throw new Error('Expected JSON but received: ' + contentType);
      }
    } catch (error) {
      console.error('Discharge error:', error);
      setError(error.message); // Set error message
    }
  };

  return (
    <div className="App">
      {loading ? (
        <p>Loading bots...</p>
      ) : error ? (
        <p>Error: {error}</p> // Display error message
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;


