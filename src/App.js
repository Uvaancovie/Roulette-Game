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

      <div className="interactive-section">
        <h2>🎉 Spin to Win a GTI! 🚗</h2>
        <a
          href="https://unsplash.com/photos/red-car-passing-by-a-narrow-road-7xryii7XrS8"
          target="_blank"
          rel="noopener noreferrer"
          className="gti-link"
        >
          Click here to see the GTI
        </a>
      </div>

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
          <h2>Congratulations! You Won! 🚗 You could win a Volkswagen Golf GTI!</h2>
          <img
            src="https://images.unsplash.com/photo-1563720226710-d77dbb933a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTk2M3wwfDF8c2VhcmNofDR8fHJlZCUyMGNhcnxlbnwwfHx8fDE2Njg1MDcyNTM&ixlib=rb-4.0.3&q=80&w=400"
            alt="Volkswagen Golf GTI"
            style={{ width: '100%', borderRadius: '10px', marginTop: '20px' }}
          />
          <button onClick={resetGame}>Spin Again</button>
        </div>
      )}

      {popup === 'lose' && (
        <div className="popup lose-popup">
          <h2>Sorry, You Lost! But you are one spin away from a GTI! 🚗</h2>
          <button onClick={resetGame}>Try Again</button>
        </div>
      )}
    </div>
  );
}

export default App;
