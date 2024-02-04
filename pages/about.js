import Head from 'next/head' 
const About = () => {
    return ( 
        <>
            <Head>
            <title>Ninja List | About</title>
            <meta name="keywords" content="ninjas"/>
        </Head>
            <div>
                <h1>About</h1>
                <p>Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations. Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more.</p>
                <p>Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.</p>
            </div>
        </>
     );
}
 
export default About;