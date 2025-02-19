import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>SSG application.</h1>
      <p>This is sample page.</p>
      <div><Link href="/other">Go "other"</Link></div>
    </main>
  );
}
