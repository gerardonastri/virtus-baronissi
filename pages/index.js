import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";
import Slider from "../components/Slider";
import Fetatured from "../components/Featured";
import Societa from "../components/Societa";
import News from "../components/News";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("http://www.virtusbaronissi.altervista.org/basket.htm");
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Virtus baronissi</title>
        <meta name="description" content="Sito della virtus baronissi" />
        {/* <meta id="MetaKeyWords" HTTP-EQUIV="Keywords" content="virtus, baronissi, virtusbaronissi, palairno, irno, valle, basket, pallacanestro, mini, minibasket, polisportiva, dilettantistica, ginnastica, dolce, corsi, under13, under14, under15, under16, under17, under18, under19, esordienti, sport, gioco, palanandonobile, palestra, bambini, ragazzi, palanobile, palazzetto, impianto, sportivo" /> */}
        <meta
          name="keywords"
          id="MetaKeyWords"
          HTTP-EQUIV="Keywords"
          content="virtus, baronissi, virtus baronissi, palairno, irno, valle, basket, pallacanestro, mini, minibasket, polisportiva, dilettantistica, ginnastica, dolce, corsi, under13, under14, under15, under16, under17, under18, under19, esordienti, sport, gioco, palanandonobile, palestra, bambini, ragazzi, palanobile, palazzetto, impianto, sportivo"
        />
        <meta name="author" content="Virtus Baronissi" />
        <meta name="copyright" content="Copyright 2022 virtus baronissi" />
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/virtus-baronissi.appspot.com/o/logo%20virtus.jpg?alt=media&token=e66637b7-604e-47a6-845f-c13c94a58e7f"
        />
      </Head>
      <Navbar />
      {/* <Slider /> */}
      <div className={styles.featuredImg}>
        <Image
          src="/featured-img2.webp"
          alt="featured img"
          layout="fill"
          // width={50}
          // height={80}
          sizes="(max-width: 768px) 100vw"
        />
        <div className={styles.overlay} />
      </div>
      <Fetatured />
      <Societa />
      <News />
      <Footer />
    </div>
  );
}
