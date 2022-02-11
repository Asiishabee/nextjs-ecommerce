import Head from 'next/head'
import HomePage from '../components/HomePage'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
        <HomePage />
      

    </div>
  )
}
