import React from 'react'
import styles from '../styles/Societa.module.css'

const Societa = () => {
  return (
    <div className={styles.container}>
        <div className={styles.societa}>
            <h1><b>Polisportiva Dilettantistica Virtus Baronissi dal 2000</b></h1>
            <h3>Staff</h3>
            <ul>
                <li><b>Presidente:</b> De Chiara Agostino</li>
                <li><b>Vice presidente:</b> Spisso Aniello</li>
                <li><b>Segretario:</b> De Chiara Valeria</li>
                <li><b>Allenatore under 19:</b> Spisso Gerardo</li>
                <li><b>Allenatore under 17:</b> Di Giuseppe Alessio</li>
                <li><b>Allenatore under 15:</b> Abundo Carlo</li>
                <li><b>Istruttori minibasket:</b> Rizzo Michele - Spisso Gerardo - Senatore Attilio - Antonio Iannone</li>
            </ul>
            <h3 style={{marginBottom: '10px'}}>Sede</h3>
            <p>VIA MARCONI, 13 C/O DE CHIARA Agostino 84081 BARONISSI (SA)</p>

            <h3 style={{marginBottom: '10px'}}>Campo di gioco</h3>
            <p><b>Palestra Palairno Nando Nobile</b></p>
            <p>Via G. Fortunato 22 Baronissi</p>
            <p>TEL. 3921392228</p>
            <p>CF: 95089310650  Dona il tuo 5x1000 </p>

            <h3 style={{marginBottom: '10px'}}>Corsi</h3>
            <p><b>Lunedi - Mercoledi - Venerdi</b></p>
            <ul>
                <li>ore 16:00-17:00: <span className={styles.squadra}>Minibasket (2015-2013)</span> <span className={styles.eccezione}> solo Lunedì</span></li>
                <li>ore 17:00-18:00: <span className={styles.squadra}>Esordienti B (2012-2011)</span> <span className={styles.eccezione}> Lunedì</span></li>
                <li>ore 17:00-18:00: <span className={styles.squadra}>Esordienti A (2012-2011)</span> <span className={styles.eccezione}> Mercoledì e Venerdì</span></li>
                <li>ore 18:00-19:15: <span className={styles.squadra}>Under 17 (2006-2007)</span></li>
                <li>ore 19:15-20:15: <span className={styles.squadra}>Under 15 (2008-2010)</span></li>
                <li>ore 20:15-21:30: <span className={styles.squadra}>Under 19 (2004-2005)</span> <span className={styles.eccezione}> solo Mercoledì e Venerdì</span></li>
            </ul>
            <p><b>Martedi - Giovedi</b></p>
            <ul>
                <li>ore 15:30-16:30 <span className={styles.squadra}>Minibasket (2018-2016)</span></li>
                <li>ore 16:30-17:30 <span className={styles.squadra}>Minibasket (2015-2013)</span></li>
                <li>ore 17:30-18:30 <span className={styles.squadra}>Minibasket (2012-2011)</span></li>
            </ul>
            <p><b>Sabato</b></p>
            <ul>
                <li>ore 11:00-13:00 <span className={styles.squadra}>Under 19 (2004-2005)</span></li>
            </ul>

        </div>
        {/* <div className={styles.imgContainer}>
            <img src="/foto-staff-1.jpeg" alt="" />
            <img src="/foto-staff-2.jpeg" alt="" />
            <img src="/foto-staff-3.jpeg" alt="" />
            <img src="/foto-staff-4.jpeg" alt="" />
            <img src="/foto-staff-6.jpeg" alt="" />
            <img src="/foto-staff-7.jpeg" alt="" />
            <img src="/foto-staff-8.jpeg" alt="" />
            <img src="/foto-staff-9.jpeg" alt="" />
            <img src="/foto-staff-10.jpeg" alt="" />
            
        </div> */}
        <div className={styles.featuredImg}>
            <img src='/featured-img.jpeg' alt='featured img' />
        </div>
    </div>
  )
}

export default Societa