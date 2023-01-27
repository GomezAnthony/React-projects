import React from 'react';

const PersonForm = ({
  onSubmit,
  newName,
  newPhone,
  newPersonChange,
  newNumberChange,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={newName} onChange={newPersonChange} />
      </div>
      <div>
        number: <input value={newPhone} onChange={newNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
