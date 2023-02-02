import React from 'react';

function Persons({ persons, remPer }) {
  return (
    <div>
      <p>
        {persons.map((persons) => (
          <p key={persons.name}>
            {persons.name} {persons.number}{' '}
            <button onClick={() => remPer(persons.id)}>delete</button>
          </p>
        ))}
      </p>
    </div>
  );
}

export default Persons;
