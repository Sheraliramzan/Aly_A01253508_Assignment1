import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../comp/nav/nav'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content= 'Assignment #1 - Contact Us Page'/>
        <meta property="og:description" content= "BCIT Digital Design and Development Diploma"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className='Contactcont'>
          <Nav/>
          <div>
          <div className='headcont1'>
                      <hr className='hori'></hr>
                      <h1 className='header'>Contact Us</h1>
                      <hr className='hori1'></hr>
          </div>
              <p>Want to </p>
              <form>
                  <fieldset>
                      <table>
                          <thead><tr></tr></thead>
                          <thead><tr></tr></thead>
                      </table>
                  </fieldset>
              </form>
          </div>
          <a>
              <span>
                  <img></img>
                  <img></img>
              </span>
          </a>
        </div>
          
      </main>
    </>
  )
}
