import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";
import Nav from '../comp/nav/nav';
import Images from '../comp/carousel/Images';

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
                <p className='para3'> Our students gain the technical skills, real-world experience,
                  and problem-solving ability <br /> needed to embrace complexity
                  and lead innocation in a rapidly changing workforce.</p>
                <p className='para3'>Through close collaboration with industry, our network of alumni
                  and partners continue to <br /> achieve global success.</p>
              </div>
                <h2 className='header2'> Information Sessions</h2>
                <p className='para3'> Information Sessions are a simple way to figure out the next
                  step along your career path. <br /> Learn more about the
                programs that interest you.</p>
                <h3 className='header3'>Big Info</h3>
              <p className='para4'> Big Info is the largest program expo and information session at
                BCIT. It's your chance to find <br /> out about all our
                programs-from business, computing, and health to engineering,
                trades,
                <br /> and applied sciences.
              </p>
              <p className='para3'>If you missed our fall event the next Big Info is scheduled to
                return on February 15, 2023.
              </p>
              <h2 className="header4">Campus Tours</h2>
              <p className='para4'>  Tours run weekdays September to May, on our Burnaby campus. See
                BCIT in person and get a <br /> taste of campus life.</p>
          </div>
          <div>
                  <Images/>
                  <div className='headcont1'>
                      <hr className='hori'></hr>
                      <h1 className='header'>Department</h1>
                      <hr className='hori1'></hr>
                  </div>
                  <div>
                    <ul className='DepList'>
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
          <a >
            <span>
             <Image alt='down' className='downarrow' src ={"/downwardArrow.png"} width={25} height={35}></Image>
            </span>
          </a>
          <a>
            <span>
             <Image alt='down' className='uparrow' src ={"/upwardArrow.png"} width={25} height={35}></Image>
            </span>
          </a>
      </main>
    </>
  )
}
export default dynamic (() => Promise.resolve(About), {ssr: false})