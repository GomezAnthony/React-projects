import React from 'react';

export const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad;
  if (total === 0) {
    return (
      <div>
        <p>No data was given</p>
      </div>
    );
  }

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {good + neutral + bad} </p>
    </div>
  );
};
