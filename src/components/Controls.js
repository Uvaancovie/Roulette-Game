import React, { useState } from 'react';

const Controls = ({ result, bet, balance, setBalance, onPlaceBet, resetGame }) => {
  const [betAmount, setBetAmount] = useState('');

  const handlePlaceBet = () => {
    if (betAmount <= 0 || betAmount > balance) {
      alert('Invalid bet amount!');
      return;
    }
    onPlaceBet(betAmount);
  };

  return (
    <div>
      <h2>Controls</h2>
      <div>Current Balance: ${balance}</div>
      <input
        type="number"
        value={betAmount}
        onChange={(e) => setBetAmount(parseInt(e.target.value))}
        placeholder="Enter your bet amount"
        min="1"
        max={balance}
      />
      <button onClick={handlePlaceBet}>Place Bet</button>
      <button onClick={resetGame} disabled={!result}>
        {result ? 'Spin Again' : 'Place a Bet'}
      </button>
    </div>
  );
};

export default Controls;
