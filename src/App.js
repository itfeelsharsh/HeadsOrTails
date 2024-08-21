import React, { useState } from 'react';
import { Button, Card } from 'flowbite-react';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [flipping, setFlipping] = useState(false);

  const handleFlip = () => {
    setFlipping(true);
    setTimeout(() => {
      const outcomes = ['heads', 'tails'];
      const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
      setResult(randomOutcome);
      setFlipping(false);
    }, 1000); // Duration of the flip animation
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
      <h1 className="text-6xl font-extrabold mb-10 text-gradient">Heads or Tails?</h1>
      <Card className="bg-gradient-to-r from-pink-500 to-yellow-500 p-8 rounded-2xl shadow-xl mb-10 relative">
        {result && (
          <img
            src={`/${result}.png`}
            alt={result}
            className={`w-64 h-64 transition-transform duration-500 transform ${flipping ? 'flip' : 'hover:scale-110'}`}
          />
        )}
        <div
          className={`absolute inset-0 bg-black ${flipping ? 'opacity-50 blur-md' : 'opacity-0'} transition-opacity duration-500`}
        />
      </Card>
      <Button
        onClick={handleFlip}
        className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105"
      >
        Flip Coin
      </Button>
    </div>
  );
}

export default App;
