import React, { useState } from 'react';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

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
      setPersons([...person, { name: newName, number: newNumber }]);
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
      <PersonForm
        onSubmit={addNewPerson}
        newName={newName}
        newPersonChange={handlePersonChange}
        newPhone={newNumber}
        newNumberChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filterPhoneBook} />
    </div>
  );
}

export default App;
