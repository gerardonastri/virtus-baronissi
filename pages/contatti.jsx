import Navbar from '../components/Navbar'
import styles from '../styles/Contatti.module.css'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import MapIcon from '@mui/icons-material/Map';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import {axiosReq} from '../util/apiCalls'
import { useRouter } from 'next/router';



export default function Contatti() {
    const [nome, setNome] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [messaggio, setMessaggio] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async () => {
        if(nome.length && telefono.length && email.length && messaggio.length){
            try {
                const res = await axiosReq.post('message', {
                    nome,
                    telefono,
                    email,
                    messaggio
                })
                router.reload()

            } catch (error) {
                console.log(error);
            }
        } else {
            setError('Compila tutti i campi');
        }
    }


  return (
    <div className={styles.container}>
        <Navbar />
        <div className={styles.wrapper}>
            <h1>Contattaci</h1>
          <div className={styles.desc}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolores enim recusandae illo beatae consequatur, incidunt, animi adipisci voluptates quam pariatur. Nostrum, quidem odit tenetur optio blanditiis rerum repellendus voluptas.</p>
          </div>
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
            <div className={styles.content}>
                <div className={styles.map}>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12089.96588087445!2d14.7803993!3d40.751214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd54fb2b2bc89ee46!2sPalazzetto%20dello%20sport%20%22Nando%20Nobile%22%20(Palairno)!5e0!3m2!1sit!2sit!4v1657993173985!5m2!1sit!2sit" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12089.96588087445!2d14.7803993!3d40.751214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd54fb2b2bc89ee46!2sPalazzetto%20dello%20sport%20%22Nando%20Nobile%22%20(Palairno)!5e0!3m2!1sit!2sit!4v1657993173985!5m2!1sit!2sit" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div className={styles.form}>
                    <h2>I TUOI DATI</h2>
                    <span className={styles.error}>{error && error}</span>
                    <div className={styles.formFlex}>
                        <input type="text" name="name" id="name" placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)} />
                        <input type="text" name="phone" id="phone" placeholder='Telefono'  value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>
                    <input type="email" name="email" id="email" placeholder='Email'  value={email} onChange={(e) => setEmail(e.target.value)} />
                    <textarea name="message"  id="" cols="30" rows="10" placeholder='Messaggio'  defaultValue={messaggio} onChange={(e) => setMessaggio(e.target.value)}></textarea>
                    <button onClick={handleSubmit} style={{cursor: 'pointer'}}>Invia messaggio</button>
                </div>
            </div>
        </div>
        <Footer />
      
    </div>
  )
}
