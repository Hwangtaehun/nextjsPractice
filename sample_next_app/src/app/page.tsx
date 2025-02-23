"use client";
import {useState} from 'react';
import useSWR from "swr";

const url = 'http://localhost:3000/rh?id=';
const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Home() {
  const [input,setInput] = useState(0)
  const {data, error, isLoading} = useSWR(url + input, fetcher);
  const doChange = (event) => {
    const val = event.target.value;
    setInput(val);
    mutate(url + val);
  }
  return(
    <main>
      <h1 className="title">Index page</h1>
      <p className="msg font-bold">※SWR로 데이터를 가져옵니다.</p>
      <input type="number" min="0" max="2" className="input m-5" value={input} onChange={doChange} />
      <p className="msg border p-2">{error ? 'ERROR!!' : isLoading ? 'loading...' : JSON.stringify(data)}</p>
    </main>
  );
}