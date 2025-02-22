'use client';
import { Inter } from 'next/font/google';
import {useState} from 'react';
import useSWR from 'swr';

const inter = Inter({ subsets: ['latin'] });

const urlpath = '/api/data/';
const fetcher = (...args) => fetch(...args)
  .then(res => res.json());

export default function Home() {
  const [num, setNum] = useState(0);
  const [url, setUrl] = useState(urlpath + num);
  const {data, error, isLoading} = useSWR(url, fetcher);

  const doChange = (event) => {
    const val = event.target.value;
    setNum(val);
    setUrl(urlpath + val);
  }

  return (
    <main>
      <h1 className="header">Index page</h1>
      <p>API 이용 예제입니다.</p>
      <div>
        <input type="number" min="0" max="3" onChange={doChange} value={num}/>
      </div>
      <p className="border p-3">
        result: {isLoading ? "reading..." : JSON.stringify(data)}
      </p>
    </main>
  );
}