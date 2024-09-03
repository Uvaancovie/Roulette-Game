import React, { useState } from 'react';
import RouletteWheel from './components/RouletteWheel';
import Controls from './components/Controls';
import './App.css';
import Confetti from 'react-confetti';

function App() {
  const [balance, setBalance] = useState(1000); // Starting balance
  const [bet, setBet] = useState(null);
  const [result, setResult] = useState(null);
  const [popup, setPopup] = useState(null);

  const handlePlaceBet = (amount) => {
    setBet(amount);
  };

  const handleSpin = (result) => {
    setResult(result);

    if (Math.random() > 0.7 && result === parseInt(bet)) { // 30% chance to win
      const winnings = 35 * bet; // 35:1 payout for a correct number
      setBalance(balance + winnings);
      setPopup('win');
    } else {
      setBalance(balance - bet);
      setPopup('lose');
    }
  };

  const resetGame = () => {
    setBet(null);
    setResult(null);
    setPopup(null);
  };

  return (
    <div className="App">
      <header className="casino-header">
        <h1>Covies Casino</h1>
      </header>
      <div className="casino-banner">
        <div className="spinning-icon">🎰</div>
        <div className="spinning-icon">💰</div>
        <div className="spinning-icon">🎲</div>
      </div>
      <RouletteWheel onSpin={handleSpin} />
      <Controls
        result={result}
        bet={bet}
        balance={balance}
        setBalance={setBalance}
        onPlaceBet={handlePlaceBet}
        resetGame={resetGame}
      />

      {popup === 'win' && (
        <div className="popup">
          <Confetti />
          <h2>Congratulations! You Won!</h2>
          <button onClick={() => setPopup(null)}>Close</button>
        </div>
      )}

      {popup === 'lose' && (
        <div className="popup lose-popup">
          <h2>Sorry, You Lost!</h2>
          <button onClick={() => setPopup(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
