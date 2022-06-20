import Navbar from '../components/Navbar'
import styles from '../styles/Contatti.module.css'
import React from 'react'
import Footer from '../components/Footer'
import MapIcon from '@mui/icons-material/Map';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';



export default function Contatti() {

  return (
    <div className={styles.container}>
        <Navbar />
        <div className={styles.wrapper}>
            <h1>Contattaci</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolores enim recusandae illo beatae consequatur, incidunt, animi adipisci voluptates quam pariatur. Nostrum, quidem odit tenetur optio blanditiis rerum repellendus voluptas.</p>
            <div className={styles.info}>
                <div className={styles.single}>
                    <MapIcon />
                    <div className={styles.flex}>
                        <h2>DOVE CI TROVIAMO</h2>
                        <span>VIA G. Fortunato, 22 - SAVA DI BARONISSI (SA)</span>
                    </div>
                </div>
                <div className={styles.single}>
                    <MailOutlineIcon />
                    <div className={styles.flex}>
                        <h2>EMAIL</h2>
                        <span>virtusbaronissi@libero.it</span>
                    </div>
                </div>
                <div className={styles.single}>
                    <LocalPhoneOutlinedIcon />
                    <div className={styles.flex}>
                        <h2>TELEFONO</h2>
                        <span>+3921392228</span>
                    </div>
                </div>
            </div>
            <div className={styles.form}>
                <h2>I TUOI DATI</h2>
                <div className={styles.formFlex}>
                    <input type="text" name="name" id="name" placeholder='Nome' />
                    <input type="text" name="phone" id="phone" placeholder='Telefono' />
                </div>
                <input type="email" name="email" id="email" placeholder='Email' />
                <textarea name="message"  id="" cols="30" rows="10" placeholder='Messaggio'></textarea>
                <button>Invia messaggio</button>
            </div>
        </div>
        <Footer />
      
    </div>
  )
}
