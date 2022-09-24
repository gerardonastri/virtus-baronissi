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
            <p>Lunedi - Mercoledi - Venerdi</p>
            <ul>
                <li>ore 16:00-17:00 Minibasket (2015-2013) <b>- solo lunedì</b></li>
                <li>ore 17:00-18:00 Minibasket (2012-2011)</li>
                <li>ore 18:00-19:15 Under 17 (2006-2007)</li>
                <li>ore 19:15-20:15 Under 15 (2008-2010)</li>
                <li>ore 20:15-21:30 Under 19 (2004-2005) <b>- solo Mercoledì e Venerdì</b></li>
            </ul>
            <p>Martedi - Giovedi</p>
            <ul>
                <li>ore 15:30-16:30 Minibasket (2018-2016)</li>
                <li>ore 16:30-17:30 Minibasket (2015-2013)</li>
            </ul>
            <p>Sabato</p>
            <ul>
                <li>ore 11:00-13:00 Under 19 (2004-2005)</li>
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