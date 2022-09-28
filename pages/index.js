import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MapChart from '../components/mapChart';


export default function Home({posts}) {
  console.log("🚀 ~ file: index.js ~ line 8 ~ Home ~ posts", posts)
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <div className='h-screen _map'>
      <MapChart/>
      </div>

      
    </div>
  )
}


