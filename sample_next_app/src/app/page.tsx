"use client";
import {useState} from 'react';
import useSWR from "swr";

const url = 'http://localhost:3000/rh';
const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Home() {
  const [input,setInput] = useState('')
  const {data, error, mutate, isLoading} = useSWR(url + input, fetcher);
  const doChange = (event) => {
    const val = event.target.value;
    setInput(val);
    mutate(url);
  }
  const doAction = () => {
    const opts = {
      method:'POST',
      body:JSON.stringify({content:input})
    };
    fetch(url, opts).then(resp=>{
      setInput('');
      mutate(url);
    });
  }
  return(
    <main>
      <h1 className="title">Index page</h1>
      <p className="msg font-bold">※SWR로 데이터를 가져옵니다.</p>
      <input type="text" className="input m-5" value={input} onChange={doChange} />
      <button onClick={doAction} className="btn">Click</button>
      <pre className="msg border p-2">{error ? 'ERROR!!' : isLoading ? 'loading...' : data.content}</pre>
    </main>
  );
}