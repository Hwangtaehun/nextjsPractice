"use server"

const url = 'http://localhost:3000/sample.json';

async function getSampleData(){
  const resp = await fetch(
    url,
    {cache: 'no-store'}
  );
  const result = await resp.json();
  return result;
}

export default async function Home() {
  const data = await getSampleData();
  return(
    <main>
      <h1 className="title">Index page</h1>
      <p className="msg">{data.message}</p>
    </main>
  );
}