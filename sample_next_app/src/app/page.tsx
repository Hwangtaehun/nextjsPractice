"use server"
import { Metadata } from "next";

export async function generateMetadata() {
  return {
    title: 'Index page',
  };
}

const defaultProps = {
  title: "Static page",
  msg: "This is static page sample."
};

export default function Home() {
  return(
    <main>
      <h1 className="title">{defaultProps.title}</h1>
      <p className="msg">{defaultProps.msg}</p>
    </main>
  );
}