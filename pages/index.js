import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MapChart from '../components/mapChart';
import Hero from '../components/hero';
import Turky from '../components/turky';


export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Hero/> */}
      
      <div className='h-screen _map'>
      <MapChart/>
      </div>
{/*       
      <div className='h-screen _map'>
        <Turky/>
      </div> */}
      
    </div>
  )
}


