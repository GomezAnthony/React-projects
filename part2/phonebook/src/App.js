import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personServices from './services/persons';
import Notification from './components/Notification';

function App() {
  const [persons, setPersons] = useState([]);
  const [newNumber, setNewNumber] = useState('');
  const [newName, setNewName] = useState('');
  const [filter, setFilter] = useState('');
  const [showMessage, setShowMessage] = useState();

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

    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      const confirmation = window.confirm(
        `${newName} is already in the phonebook, replace the old number with a new one?`
      );

      if (confirmation) {
        personServices
          .update(existingPerson.id, { ...existingPerson, number: newNumber })
          .then((returnedPerson) => {
            setPersons(
              persons.map((personItem) =>
                personItem.id !== existingPerson.id
                  ? personItem
                  : returnedPerson
              )
            );
          });

        console.log(' new number', newNumber);
      }
    } else {
      setShowMessage(`Added ${newName}`);
      setTimeout(() => {
        setShowMessage(null);
      }, 5000);
      personServices.create(personObj).then((returnedPerson) => {
        setPersons([...persons, returnedPerson]);
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
          alert(`Deleted ${persons.find((per) => per.id === id).name}`);
          setPersons(persons.filter((per) => per.id !== id));
        })
        .catch((err) => {
          setShowMessage(
            `Information on ${newName} is already deleted from the server`
          );
          setTimeout(() => {
            setShowMessage(null);
          }, 5000);
        });
    } else {
      return;
    }
  };

  const filterPhoneBook =
    filter === ''
      ? persons
      : persons.filter((persons) =>
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
      <Notification message={showMessage} />
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
