// Next 
import type { NextPage } from 'next'
import Head from 'next/head'

// Components
import Navbar from "../components/Navbar"
import Welcome from '../components/Welcome'
import Search from '../components/Search'
import Popular from '../components/Popular'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Serumah.</title>
        <meta name="description" content="OTONFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Welcome/>
      <Search/>
      <Popular/>
    </>
  )
}

export default Home
