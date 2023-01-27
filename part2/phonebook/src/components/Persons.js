import React from 'react';

function Persons({ persons }) {
  return (
    <div>
      <p>
        {persons.map((persons) => (
          <p key={persons.name}>
            {persons.name} {persons.number}
          </p>
        ))}
      </p>
    </div>
  );
}

export default Persons;
