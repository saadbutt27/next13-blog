// 'use client';

import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export default function Post() {
    // const router = useRouter();
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Account</h1>
      </div>
      <Link href="/">Back to home</Link>
      {/* <button type="button" onClick={() => router.push('/')}>Back</button> */}
    </main>
  )
}
