import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";
import Nav from '../comp/nav/nav';


const About = () => {
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
        <div className="aboutcont">
          <Nav/>
          <div>
              <div className='headcont1'>
                <hr className='hori'></hr>
                <h1 className='header'>About Us</h1>
                <hr className='hori1'></hr>
              </div>
              <div className='paracont'>
                <p className='para2'> We are proud to deliver an education that goes beyond textbooks
                  and classrooms.</p>
                <p className='para2'> Our students gain the technical skills, real-world experience,
                  and problem-solving ability <br /> needed to embrace complexity
                  and lead innocation in a rapidly changing workforce.</p>
                <p className='para2'>Through close collaboration with industry, our network of alumni
                  and partners continue to <br /> achieve global success.</p>
              </div>
                <h2 className='header2'> Information Sessions</h2>
                <p className='para3'> Information Sessions are a simple way to figure out the next
                  step along your career path. <br /> Learn more about the
                programs that interest you.</p>
                <h3>Big Info</h3>
              <p> Big Info is the largest program expo and information session at
                BCIT. It's your chance to find <br /> out about all our
                programs-from business, computing, and health to engineering,
                trades,
                <br /> and applied sciences.</p>
              <p>If you missed our fall event the next Big Info is scheduled to
                return on February 15, 2023.</p>
              <p></p>
          </div>
          <div>
            <div id="carouselImage">
                <Image src={"/0.jpg"} width={200} height={200}></Image>
                <Image src={"/1.jpg"} width={200} height={200}></Image>
                <Image src={"/2.jpg"} width={200} height={200}></Image>
                <Image src={"/3.jpg"} width={200} height={200}></Image>
                <Image src={"/4.jpg"} width={200} height={200}></Image>
                <Image src={"/5.jpg"} width={200} height={200}></Image>
            </div >
                  <div id="testOnImageHere">
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
export default dynamic (() => Promise.resolve(About), {ssr: false})