import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

function App() {
  const [person, setPersons] = useState([]);
  const [newNumber, setNewNumber] = useState('');
  const [newName, setNewName] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('effect');
    axios.get('http://localhost:3001/persons').then((response) => {
      console.log('promise filled');
      console.log(response.data);
      setPersons(response.data);
    });
  }, []);

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
