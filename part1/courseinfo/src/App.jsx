const Header = (props) => {
  return (    
  <div>      
    <h1>{props.course}</h1>    
  </div>  
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <p key={part.name}>
          {part.name}: {part.exercises} exercises
        </p>
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <div>
      <p>Total exercises: {totalExercises}</p>
    </div>
  );
};



const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  );
};

export default App;