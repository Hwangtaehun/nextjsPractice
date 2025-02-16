import './App.css';
import { useState } from 'react';

var data = {
  data: [
    {name:"Kim"},
    {name:"Lee"},
    {name:"Park"},
  ],
  message: "Hello",
};

function Message() {
  return (
    <p className="ClassA">{data.message}</p>
  )
}

function Data(){
  return(
    <ul>
      {data.data.map((item, key) => {
        return(<li key={key}>{item.name}</li>)
      })}
    </ul>
  );
}

function App(props) {
  var [input, setInput] = useState("");

  const doChange = (event) => {
    setInput(event.target.value);
  };

  const doClick = () => {
    data.data.push({name:input});
    data.message = "you typed: \"" + input + "\".";
    setInput("");
  };

  return (
    <div className="App">
      <h1 className="ClassB">{props.title}</h1>
      <Message />
      <div>
        <input onChange={doChange} value={input}/>
        <button onClick={doClick}>Click</button>
      </div>
      <Data />
    </div>
  );
}

export default App;
