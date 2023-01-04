import React from 'react';

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Content = ({
  part1,
  exercises1,
  part2,
  exercises2,
  part3,
  exercises3,
}) => {
  return (
    <div>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <div>
      <p>
        {part} {exercises}
      </p>
    </div>
  );
};

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

const App = () => {
  // const course = 'Half Stack application development';
  // const part1 = 'Fundementals of React';
  // const exercises1 = 10;
  // const part2 = 'Using props to pass data';
  // const exercises2 = 7;
  // const part3 = 'State of a component';
  // const exercises3 = 14;
  const course = 'Half Stack application development';
  // const part1 = {
  //   name: 'Fundementals of React',
  //   exercises: 10,
  // };
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7,
  // };
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14,
  // };
  const parts = [
    {
      name: 'Fundementals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];
  return (
    <>
      <Header course={course} />
      <Content
        part1={parts[0].name}
        exercises1={parts[0].exercises}
        part2={parts[1].name}
        exercises2={parts[1].exercises}
        part3={parts[2].name}
        exercises3={parts[2].exercises}
      />
      <Total
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />
    </>
  );
};

export default App;
