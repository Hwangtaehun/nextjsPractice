"use client"
import useSWR from "swr";

const url = '/sample.json';
const fetcher = (...args) =>
  fetch(...args).then(res => res.json());

export default async function Home() {
  const {data, error, isLoading} = useSWR(url, fetcher);

  function doSWR() {
    if (error) return <p>ERROR</p>;
    if (isLoading) return <p>isLoading...</p>;
    return <p>{data.message}</p>
  }

  return (
    <main>
      <h1 className="title">Index page</h1>
      <p className="msg font-bold">
        ※SWR로 데이터를 가져옵니다.
      </p>
      <div className="border p-2 m-5">{doSWR()}</div>
    </main>
  );
}