import React from 'react';
import Part from './Part';

function Content({ course }) {
  const total = course.parts.reduce((acc, curr) => {
    return acc + curr.exercises;
  }, 0);

  console.log(total);
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <p>Total of {total} exercises</p>
    </div>
  );
}

export default Content;
