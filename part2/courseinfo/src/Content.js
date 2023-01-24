import React from 'react';
import Part from './Part';

function Content({ course }) {
  return (
    <div>
      {course.parts.map((part) => (
        <Part part={part} />
      ))}
    </div>
  );
}

export default Content;
