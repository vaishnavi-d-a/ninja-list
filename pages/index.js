import Head from 'next/head'                                            //<div className={styles.container}>
import Image from "next/image";
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'
import styles from '../style/Home.module.css'
export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations. Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more.</p>
        <p className={styles.text}>Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.</p>
        <Link href="/ninjas" className={styles.btn}>
            See Ninja Listing
        </Link>
      </div>
    </>
     
  );
}
