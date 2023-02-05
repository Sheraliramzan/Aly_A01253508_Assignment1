import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'



export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const router = useRouter();
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
          <div className="navcont">
              <Image alt='' className='menuimg'
                src={"/icons/menu-icon.png"}
                width={40}
                height={30}
                onClick={handleClick}
              />
              <Image alt='' className='gardimg' src={"/icons/graduation-hat.png"} width={40} height={30} />
          </div>
          <div className="menucont">
          <div className="listcont">
            <div className="btncont">
              <button className="close" onClick={handleClick}>
                <strong>X</strong>
              </button>
            </div>
              <ul>
                <li>
                  <a href='#'>Home</a>
                </li>
                <li>
                  <a href='/about'>About</a>
                </li>
                <li>
                  <a href='/contact'>Contact</a>
                </li>
              </ul>
            </div>
          <Image alt=
            src={"/background-images/menuBackground.png"}
            width={240}
            height={240}
          />
        </div>
            
          <div className="headcont">
            <h1 className="headhome">An investment in <br/>knowledge pays the best <br/> interest.</h1>
            <div className="horidiv"></div>
            <p className="para1">Different than a college or university, the British Columbia <br/> Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.</p>
          </div>
          <a className='butcont'>
            <Link href="/about"><button  className='but1'>More About Us</button></Link>
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
