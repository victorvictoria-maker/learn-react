import './App.css';

function App() {
  const name = "Victoria";
  const title = <h1>React App</h1>;

  return (
    <div className="App">
      {title}
      <p>My name is {name}.</p>
    </div>
  );
}



export default App;
