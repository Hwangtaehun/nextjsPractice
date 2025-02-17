'use client'

import {useState} from 'react';

export default function Home() {
  var [input, setInput] = useState("");
  var [message, setMessage] = useState("your name:");

  const doChange = (event)=> {
    setInput(event.target.value);
  };

  const doClick = ()=> {
    setMessage("Hello, " + input + "!!");
    setInput("");
  }

  return(
    <main>
      <h1 className="title">Next.js sample.</h1>
      <p className="msg">{message}</p>
      <div className="m-5">
        <input type="text" onChange={doChange} value={input} className="input"/>
        <button onClick={doClick} className="btn">Click</button>
      </div>
    </main>
  );
}