"use client"
import { serverAction } from "@/server-action"

export default async function Home() {
  return(
    <main>
      <h1 className="title">Index page</h1>
      <p className="msg">버튼을 클릭하세요.</p>
      <div>
        <form action={serverAction}>
          <button className="btn">Click</button>
        </form>
      </div>
    </main>
  )
}