import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import React from 'react'
import Slider from '../components/Slider'
import Fetatured from '../components/Featured'
import Societa from '../components/Societa'
import News from '../components/News'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Virtus baronissi</title>
        <meta name="description" content="Sito della virtu baronissi" />
        <link rel="icon" href="http://www.virtusbaronissi.altervista.org/varie/LOGO.jpg" />
      </Head>
      <Navbar />
      <Slider />
      {/* <Fetatured /> */}
      <Societa />
      <News />
      <Footer />
      
    </div>
  )
}
