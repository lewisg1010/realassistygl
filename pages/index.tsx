import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from "react";
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [listings, setListings] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://crossorigin.me/https://www.yougotlistings.com/api/rentals/search.php';
    const apiKey = 'GdFSoyKUT52NLfvpw06ZIPlYbQqEzOga8i1h3mC9';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `key=${apiKey}`,
    })
      .then(response => response.json())
      .then(data => setListings(data));
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

        <p>data below</p>
        <p>{listings}</p>
        <ul>
        {listings.map(listing => (
          <li key={listing}>{listing}</li>

        ))}
      </ul>
        </div>
      </main>
    </>
  )
}
