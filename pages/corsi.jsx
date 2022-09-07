import Navbar from '../components/Navbar'
import styles from '../styles/Corsi.module.css'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import MapIcon from '@mui/icons-material/Map';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import {axiosReq} from '../util/apiCalls'
import { useRouter } from 'next/router';
import Head from 'next/head';


const Corsi = () => {
  return (
    <div className={styles.container}> 
      <Head>
        <title>Virtus baronissi | Corsi</title>
        <meta name="description" content="Corsi della virtus baronissi" />
        <link rel="icon" href="http://www.virtusbaronissi.altervista.org/varie/LOGO.jpg" />
      </Head>
    <Navbar />
    <div className={styles.wrapper}>
        <h1>Corsi</h1>
        <div className={styles.imgContainer}>
            <img src="https://firebasestorage.googleapis.com/v0/b/virtus-baronissi.appspot.com/o/news%2Forari%20aquilotti%202023.jpg?alt=media&token=b3725496-c983-4bb1-b488-a29f7bb93ae5" alt="" />
            <img src="https://firebasestorage.googleapis.com/v0/b/virtus-baronissi.appspot.com/o/news%2Forari%20pulcini%202023.jpg?alt=media&token=9c3b8563-72a8-40cc-8712-cdb5497459e1" alt="" />
            <img src="https://firebasestorage.googleapis.com/v0/b/virtus-baronissi.appspot.com/o/news%2Forari%20under%2015%202023.jpg?alt=media&token=639d2325-78a0-4601-b667-ef40d460f6ba" alt="" />
            <img src="https://firebasestorage.googleapis.com/v0/b/virtus-baronissi.appspot.com/o/news%2Forari%20under%2017%202023.jpg?alt=media&token=4c5d9b84-a20c-46ab-a06c-dd7832789b97" alt="" />
            <img src="https://firebasestorage.googleapis.com/v0/b/virtus-baronissi.appspot.com/o/news%2Forari%20under%2019%202023.jpg?alt=media&token=7ef68390-8695-461d-89e2-786a0851bdc7" alt="" />
            <img src="https://firebasestorage.googleapis.com/v0/b/virtus-baronissi.appspot.com/o/news%2Forari%20under%20esordienti%202023.jpg?alt=media&token=caceed76-ab17-4970-963d-cca1bcd5231a" alt="" />
        </div>
    </div>

    <Footer />
    </div>
  )
}

export default Corsi