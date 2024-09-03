import React, { useState } from 'react';

const BettingBoard = ({ onBet }) => {
  const [betNumber, setBetNumber] = useState(null);

  const handlePlaceBet = () => {
    if (betNumber !== null) {
      onBet(betNumber);
    }
  };

  return (
    <div>
      <h2>Betting Board</h2>
      <input
        type="number"
        value={betNumber || ''}
        onChange={(e) => setBetNumber(parseInt(e.target.value))}
        min="0"
        max="36"
        placeholder="Place your bet (0-36)"
      />
      <button onClick={handlePlaceBet}>Place Bet</button>
    </div>
  );
};

export default BettingBoard;
