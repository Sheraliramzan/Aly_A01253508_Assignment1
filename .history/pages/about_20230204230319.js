import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content= 'Assignment #1 - About Us Page'/>
        <meta property="og:description" content= "BCIT Digital Design and Development Diploma"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div>
        <div>
            <h1></h1>
            <h1></h1>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <h2></h2>
            <h2></h2>
            <h3></h3>
        </div>
        <div id="carouselImage">
            <Image src={"/0.jpg"} width={200} height={200}></Image>
            <Image src={"/1.jpg"} width={200} height={200}></Image>
            <Image src={"/2.jpg"} width={200} height={200}></Image>
            <Image src={"/3.jpg"} width={200} height={200}></Image>
            <Image src={"/4.jpg"} width={200} height={200}></Image>
            <Image src={"/5.jpg"} width={200} height={200}></Image>
        </div >
        <div>
                <ul >
                    <li>Applied & Natural Sciences</li>
                    <li>Business & Media</li>
                    <li>Computing & IT</li>
                    <li>Engineerin</li>
                    <li>Health Sciences</li>
                    <li>Trades & Apprenticeships</li>
                 </ul>
        </div>
        </div>
        <a>
            <span>
                <img></img>
                <img></img>
            </span>
        </a>
      </main>
    </>
  )
}
