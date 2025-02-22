"use client";
import JsonItem from './JsonItem';
import useSWR from 'swr';

const url = '/sample.json';
const fetcher = (...args) => 
  fetch(...args).then(res => res.json()); 

export default function Home() {
  const {data, error, isLoading} = useSWR(url, fetcher);

  const doItem = (value) => {
    return <JsonItem data={value} />;
  }

  return(
    <main>
      <h1 className="title">Index page</h1>
      <p className="msg font-bold">※SWR로 데이터를 가져옵니다.</p>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>mail</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {data ? data.data.map((value)=>doItem(value))
          : <tr><td>-</td><td>-</td><td>-</td></tr>}
        </tbody>
      </table>
    </main>
  );
}
