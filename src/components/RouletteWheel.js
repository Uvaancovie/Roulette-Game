import React, { useState } from 'react';
import './RouletteWheel.css';

const RouletteWheel = ({ onSpin }) => {
  const numbers = Array.from({ length: 37 }, (_, i) => i); // 0 to 36
  const [spinning, setSpinning] = useState(false);

  const spinWheel = () => {
    setSpinning(true);
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const result = numbers[randomIndex];
    setTimeout(() => {
      onSpin(result);
      setSpinning(false);
    }, 3000); // Spin duration (3 seconds)
  };

  return (
    <div>
      <h2>Roulette Wheel</h2>
      <div className={`roulette-wheel ${spinning ? 'spinning' : ''}`}>
        <div className="number-display">
          {spinning ? 'Spinning...' : 'Place your bet and spin!'}
        </div>
      </div>
      <button onClick={spinWheel} disabled={spinning}>
        {spinning ? 'Spinning...' : 'Spin the Wheel'}
      </button>
    </div>
  );
};

export default RouletteWheel;
