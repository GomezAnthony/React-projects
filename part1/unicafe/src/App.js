import React, { useState } from 'react';
import { Button } from './components/Button';
import { Statistics } from './components/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodChange = () => {
    setGood(good + 1);
  };

  const handleNeutralChange = () => {
    setNeutral(neutral + 1);
  };

  const handleBadhange = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodChange} label="good" />
      <Button onClick={handleNeutralChange} label="neutral" />
      <Button onClick={handleBadhange} label="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
