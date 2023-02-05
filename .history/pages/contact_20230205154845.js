import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../comp/nav/nav'
import Form from '../comp/ContactForm/Form'

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
              <p className='para5'>Want to discuss? Let's Chat!</p>
              <Form/>
          </div>
          <a href='/contact'>
            <span>
             <Image alt='down' className='downarrow' src ={"/downwardArrow.png"} width={25} height={35}></Image>
             <img></img>
            </span>
          </a>
        </div>
          
      </main>
    </>
  )
}
