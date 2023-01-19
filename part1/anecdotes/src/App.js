import { React, useState } from 'react';
import { Button } from '../src/components/Button';

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const generateRandomNumbers = () => {
    return Math.floor(Math.random() * 8);
  };

  const handleChangeAnecdote = () => {
    setSelected(generateRandomNumbers());
  };

  const handleVoteChange = () => {
    const copy = [...vote];
    console.log(copy);
    copy[selected] += 1;
    setVotes(copy);

    // I cant modify the varaible directly. It needs to be changes through a state.
    // vote[selected] += 1;
    // setVotes(vote);
  };

  const displayLargestVotes = () => {
    return Math.max(...vote);
  };

  console.log(displayLargestVotes() + ' Hello');

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>had {vote[selected]} votes</p>
      <Button onClick={handleVoteChange} label="vote" />
      <Button onClick={handleChangeAnecdote} label="next anecdote" />
      <h1>Anecdotes with most votes</h1>
      <p>{anecdotes[vote[selected]]}</p>
    </div>
  );
}

export default App;
