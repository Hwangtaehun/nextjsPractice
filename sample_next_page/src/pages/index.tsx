import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>SSG application.</h1>
      <p>This is sample page.</p>
    </main>
  );
}
