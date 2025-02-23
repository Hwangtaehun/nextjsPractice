"use client";
import useSWR from "swr";

const url = '/rh';
const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Home() {
  const {data, error, isLoading} = useSWR(url, fetcher);
  return(
    <main>
      <h1 className="title">Index page</h1>
      <p className="msg font-bold">※SWR로 데이터를 가져옵니다.</p>
      <p className="msg border p-2">{error ? 'ERROR!!' : isLoading ? 'loading...' : data.content}</p>
    </main>
  );
}