import React, { useState } from 'react';
import { Button, Card } from 'flowbite-react';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFlip = () => {
    setLoading(true);
    setTimeout(() => {
      const outcomes = ['heads', 'tails'];
      const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
      setResult(randomOutcome);
      setLoading(false);
    }, 500); // Duration of the blur animation
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
      <h1 className="text-6xl font-extrabold mb-10 text-gradient">Heads or Tails?</h1>
      <Card className="card p-8 mb-10 relative">
        {result && (
          <img
            src={`/${result}.png`}
            alt={result}
            className={`w-64 h-64 transition-transform duration-500 transform ${loading ? 'blur-in' : 'hover:scale-110'}`}
          />
        )}
        <div
          className={`absolute inset-0 bg-black ${loading ? 'opacity-50 blur-md' : 'opacity-0'} transition-opacity duration-500`}
        />
      </Card>
      <Button
        onClick={handleFlip}
        className="button"
      >
        Flip Coin
      </Button>
    </div>
  );
}

export default App;
