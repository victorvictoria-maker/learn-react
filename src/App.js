import './App.css';
import {Usery} from './User';
import {Planet} from './Planet';
import { useState } from 'react';

function App() {
  const name = "Victoria";
  const title = <h1>React App</h1>;

  const state = "FCT";
  const isGreen = true;

  const names = ["Harvey", "Mike", "Jessica", "Loius", "Donna"];
  const users = [
    {name: "Specter", age: 40},
    {name: "Pearson", age: 45},
    {name: "Ross", age: 25},
  ];

  const planets = [
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true},
  ];


  let [age, setAge] = useState(0);
  const increaseAge = () => {
    // age++;
    // console.log(age);
    setAge(age+1);
  }


  let [input, setInput] = useState("");
  const showInputValue = (event) => {
    setInput(event.target.value);
  };


  let [showText, setShowText] = useState(true);
  const toggleText = () => {
    setShowText(!showText);
  };

  let [color, setColor] = useState("purple");
  const changeColour = () => {
    // if(color === "purple") {
    //   setColor("green");
    // } else {
    //   setColor("purple");
    // }
    setColor(color === "purple" ? "green" : "purple");
  };



  let [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count+1);
  };

  const decreaseCount = () => {
    setCount(count-1);
  };

  const countToZero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      {title}
      <p>My name is {name}.</p>

      {/* conditinal rendering  with React CSS*/}
      {state === "FCT" ? <h1 style={{color : isGreen ? "green" : "red"}}>Abuja</h1> : <h1>Other Capital</h1>}
      <p style={{backgroundColor: "yellow"}}>Just a text</p>
      <p className='myOwnStyle'>Another random style</p>

      {isGreen && <button>IsGreen is true.</button>}

      {/* rendering list */}
      <hr/>
      {names.map((name, key) => {
        return <h1 key={key}> {key+1}. {name}</h1>;
      })}

      {/* using another file for your component */}
      <hr/>
      {users.map((user, key) => {
        return <Usery name={user.name} age={user.age} key={key}/>
      })}

      {/* planet exercise */}
      <hr/>
      {planets.map((planet, key) => {
        if(planet.isGasPlanet) return <Planet name={planet.name} key={key}/>
      })}
      {/* or */}
      {planets.map((planet, key) => planet.isGasPlanet && <Planet name={planet.name} key={key}/>)}


      {/* function with useState Hook*/}
      <hr/>
      {age}
      <button onClick={increaseAge}>Increase Age</button>

      <input type='text' onChange={showInputValue}/>
      {input}

      <div>
        <button onClick={toggleText}>Show/Hide</button>
        {showText && <p>My name is vicky.</p>}
      </div>

      <div>
        <button onClick={changeColour}>Change colour</button>
        <h2 style={{color: color}}>Vicky.</h2>
      </div>

      {/* useState Hook counter exercise */}
      <h2>Simple Counter</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={countToZero}>Set To Zero</button>
      {count}




      {/* component and props = works with the components in this same file */}
      <hr/>
      <User name="Victoria" age={21} email="victoria@gmail.com"/>
      <User name="Peter" age={19} email="peter@gmail.com"/>

      <hr/>
      <Job company="Amazon" position="Senior SDE" salary={90000}/>
      <Job company="Netflix" position="Project Manager" salary={100000}/>
    </div>
  );
}


// same file component
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
