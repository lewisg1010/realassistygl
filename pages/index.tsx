import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from "react";
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch('/api/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: 'key=GdFSoyKUT52NLfvpw06ZIPlYbQqEzOga8i1h3mC9'
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.text();
        setData(result);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Search Galen's Properties</title>
        <meta name="description" content="Search properties" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
        {/* <ul>
        {rentals.map((rental) => (
          <li key={rental.id}>{rental.title}</li>
        ))}
      </ul> */}
        <p>{data}</p>
        </div>
      </main>
    </>
  )
}
