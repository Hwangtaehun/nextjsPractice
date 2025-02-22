"use server"
import { serverAction } from "./server-action";

export default async function Home() {
  return(
    <main>
      <h1 className="title">Index page</h1>
      <p className="msg">※메세지 전송:</p>
      <div>
        <form className="form" action={serverAction}>
          <input className="input" type="text" name="input"/>
          <button className="btn">Click</button>
        </form>
      </div>
    </main>
  );
}