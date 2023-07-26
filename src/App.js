import './App.css';

function App() {
  const name = "Victoria";
  const title = <h1>React App</h1>;

  const state = "FCT";
  const isGreen = true;

  const names = ["Harvey", "Mike", "Jessica", "Loius", "Donna"];

  return (
    <div className="App">
      {title}
      <p>My name is {name}.</p>

      {/* conditinal rendering  with React CSS*/}
      {state === "FCT" ? <h1 style={{color : isGreen ? "green" : "red"}}>Abuja</h1> : <h1>Other Capital</h1>}
      <p style={{backgroundColor: "yellow"}}>Just a text</p>
      <p className='myOwnStyle'>Another random style</p>

      {isGreen && <button>IsGreen is true.</button>}

      <hr/>
      {/* rendering list */}
      {names.map((name, key) => {
        return <h1 key={key}> {key+1}. {name}</h1>;
      })}


      {/* component and props */}
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
      {props.name === "Victoria" ? <p>30 under 30 Woman</p> : <p>20 under 20 Man</p>}
      {/* <p>30 under 30 woman</p> */}
    </div>
  );
};

const Job = (props) => {
  return <div>My position at {props.company} is {props.position} with {props.salary} salary.</div>
};

export default App;
