import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content= "Assignment #1 - Home Page"/>
        <meta property="og:description" content= "BCIT Digital Design and Development Diploma"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className='fullcont'>
          <nav className='navbar'>
            <ul className='navmen'>
              <li className='navitem'>
              <a href='#'>Home</a>
              </li>
              <li className='navitem'>
              <a href='/about'>About</a>
              </li>
              <li className='navitem'>
              <a href='/contact'>Contact</a>
              </li>
            </ul>
            <div className='ham'></div>
            <Image className="imagecont" src={"/graduation-hat.png"} width={40} height={30}></Image>
          </nav>
          <div className="headcont">
            <h1 className="headhome">An investment in <br/>knowledge pays the best <br/> interest.</h1>
            <div className="horidiv"></div>
            <p className="para1">Different than a college or university, the British Columbia <br/> Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.</p>
          </div>
          <a className='butcont'>
            <button className='but1'>More About Us</button>
            <button className='but1'>Contact Us</button>
          </a>
          <a>
            <span>
              <Image className='downarrow' src ={"/downwardArrow.png"} width={25} height={35}></Image>
            </span>
          </a>
        </div>
      </main>
    </>
  )
}
