import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personServices from './services/persons';

function App() {
  const [person, setPersons] = useState([]);
  const [newNumber, setNewNumber] = useState('');
  const [newName, setNewName] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('effect');
    personServices.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addNewPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
      number: newNumber,
    };

    if (person.find((person) => person.name === newName)) {
      alert(`${newName} is already in the phonebook`);
      setNewName('');
    } else {
      personServices.create(personObj).then((returnPerson) => {
        setPersons([...person, returnPerson]);
      });
      setNewNumber('');
      setNewName('');
    }
  };

  const removePerson = (id) => {
    if (window.confirm('Do you really want to delete this person')) {
      personServices
        .remove(id)
        .then(() => {
          alert(`Deleted ${person.find((per) => per.id === id).name}`);
          setPersons(person.filter((per) => per.id !== id));
        })
        .catch((err) => console.log(err));
    } else {
      return;
    }
  };

  const filterPhoneBook =
    filter === ''
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
      <Persons persons={filterPhoneBook} remPer={removePerson} />
    </div>
  );
}

export default App;
