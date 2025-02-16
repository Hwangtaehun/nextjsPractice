import './App.css';
import { useState } from 'react';

function App(props) {
  const [counter, setCounter] = useState(0);
  const doClick = ()=> {
    setCounter(counter+1);
  }
  return (
    <div className="App">
      <h1 className={props.color}>{props.title}</h1>
      <p className={props.color,"clickable"} onClick={doClick}>counter: {counter}.</p>
    </div>
  )
}

export default App;
