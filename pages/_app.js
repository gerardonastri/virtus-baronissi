import '../styles/globals.css'
import React from 'react'
import { AuthContextProvider } from "../context/authContext/AuthContext"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-PQYY4RR2RL"></script>
      <title>Virtus baronissi</title>
      <meta name="description" content="Sito della virtus baronissi" />
      {/* <meta id="MetaKeyWords" HTTP-EQUIV="Keywords" content="virtus, baronissi, virtusbaronissi, palairno, irno, valle, basket, pallacanestro, mini, minibasket, polisportiva, dilettantistica, ginnastica, dolce, corsi, under13, under14, under15, under16, under17, under18, under19, esordienti, sport, gioco, palanandonobile, palestra, bambini, ragazzi, palanobile, palazzetto, impianto, sportivo" /> */}
      <meta name="keywords" id="MetaKeyWords" HTTP-EQUIV="Keywords" content="virtus, baronissi, virtus baronissi, palairno, irno, valle, basket, pallacanestro, mini, minibasket, polisportiva, dilettantistica, ginnastica, dolce, corsi, under13, under14, under15, under16, under17, under18, under19, esordienti, sport, gioco, palanandonobile, palestra, bambini, ragazzi, palanobile, palazzetto, impianto, sportivo" />
      <meta name="author" content="Virtus Baronissi" />
      <meta name="copyright" content="Copyright 2022 virtus baronissi" />
      <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/virtus-baronissi.appspot.com/o/logo%20virtus.jpg?alt=media&token=e66637b7-604e-47a6-845f-c13c94a58e7f" />
    </Head>
    

    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
    </>
  )
}

export default MyApp
