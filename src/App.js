import './App.css';

function App() {
  const name = "Victoria";
  const title = <h1>React App</h1>;

  return (
    <div className="App">
      {title}
      <p>My name is {name}.</p>

      <hr/>
      <User name="Victoria" age={21} email="victoria@gmail.com"/>
      <User name="Peter" age={19} email="peter@gmail.com"/>

      <hr/>
      <Job company="Amazon" position="Senior SDE" salary={90000}/>
      <Job company="Netflix" position="Project Manager" salary={100000}/>
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <p>First name is {props.name}</p>
      <p>Age is {props.age}</p>
      <p>30 under 30 woman</p>
    </div>
  );
};

const Job = (props) => {
  return <div>My position at {props.company} is {props.position} with {props.salary} salary.</div>
};

export default App;
