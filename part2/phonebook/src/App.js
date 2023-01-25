import React, { useState } from 'react';

function App() {
  const [person, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newNumber, setNewNumber] = useState('');
  const [newName, setNewName] = useState('');
  const [filter, setFilter] = useState('');

  const addNewPerson = (event) => {
    event.preventDefault();
    if (person.find((person) => person.name === newName)) {
      alert(`${newName} is already in the phonebook`);
      setNewName('');
    } else {
      setPersons([...person, { name: newName, phone: newNumber }]);
      setNewNumber('');
      setNewName('');
    }
  };

  const filterPhoneBook =
    person === ''
      ? person
      : person.filter((persons) =>
          persons.name.toLowerCase().includes(filter.toLowerCase())
        );

  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter shown with <input onChange={handleFilterChange} value={filter} />
      </p>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input onChange={handlePersonChange} value={newName} />
        </div>
        <div>
          {' '}
          number: <input onChange={handlePhoneChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filterPhoneBook.map((persons) => (
        <p key={persons.name}>
          {persons.name} {persons.number}
        </p>
      ))}
    </div>
  );
}

export default App;
