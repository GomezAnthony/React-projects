import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Button from './components/Button';

const App = () => {
  // Create a hook to handle state change based on the input
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltred] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  // Handle function will allow to handle the chnage and update the state, based on the user input
  const handleChange = (e) => {
    console.log(e.target.value);
    setFiltred(e.target.value);
  };

  const openCountryClick = () => {
    alert(filtered);
  };

  // If the nothing is being inputed by the user, than display the whole list of countries.
  // If something is being typed into the input, filter the data based on the name inside the
  // country data set, with the input query and display the correct result.
  const filteredData =
    filtered === ''
      ? countries
      : countries.filter((data) =>
          data.name.common.toLowerCase().includes(filtered.toLowerCase())
        );

  return (
    <div>
      <p>
        Search for countries: <input onChange={handleChange} value={filtered} />
      </p>
      {filteredData.length > 10
        ? 'Too many matches, specify another filter'
        : // Display name, capital, area, Languages, Flag
        // If the countries are less than 10, used the buttons to display the countries. Show and unshow
        filteredData.length === 1
        ? filteredData.map((count) => (
            <>
              <h3 key={count.id}>{count.name.common}</h3>
              <p key={count.id}>Capital: {count.capital}</p>
              <p key={count.id}>Area: {count.area}</p>
              <h4 key={count.id}>Languages:</h4>{' '}
              <li> {Object.values(count.languages).join(', ')}</li>
              <h1>{count.flag}</h1>
            </>
          ))
        : filteredData.map((count) => (
            <li key={count.id}>
              {count.name.common}{' '}
              <Button onClick={openCountryClick} label="Show" />
            </li>
          ))}
    </div>
  );
};

export default App;
