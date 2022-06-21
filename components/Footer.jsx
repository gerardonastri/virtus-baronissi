import React from 'react';
import styles from '../styles/Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.up}>
                <div className={styles.section}>
                    <h2>SOCIALS</h2>
                    <div className={styles.socials}>
                        <a href="https://www.facebook.com/virtusbaronissi/"><FacebookIcon/></a>
                        <a href="https://www.instagram.com/virtus_baronissi/"><InstagramIcon/></a>
                        {/*<a><TwitterIcon/></a>
                        <a><LinkedInIcon/></a>*/}
                    </div>
                </div>
                <div className={styles.section}>
                    <h2>QUICK LINKS</h2>
                        <a href="/">Home</a>
                        <a href="/contatti">Contatti</a>
                        <a href="/news">News</a>
                </div>
                <div className={styles.section}>
                    <h2>Altre pagine</h2>
                        <a href="/under19">Under 19</a>
                        <a href="/under17">Under 17</a>
                        <a href="/under15">Under 15</a>
                        <a href="/minibasket">Mini basket</a>
                </div>
                <div className={styles.section}>
                    <h2>INFO CONTATTI</h2>
                        <span>
                            <LocationOnIcon />
                            VIA G. Fortunato, 22 - 84081 SAVA DI BARONISSI (SA)
                        </span>
                        <span> 
                            <LocalPhoneIcon />
                            +3921392228
                        </span>
                        <span>
                            <EmailOutlinedIcon/>
                            <a href="mailto:virtusbaronissi@libero.it">virtusbaronissi@libero.it</a>
                        </span>
                </div>
            </div>
            <hr />
            <div className={styles.down}>
                <span>Realized by  <a href="mailto:gerardonastri.dev@gmail.com">gerardonastri.dev@gmail.com</a></span>
                <span>Copyright © 2022. All rights reserved.</span>
            </div>
        </div>
    </div>
  )
}

export default Footer