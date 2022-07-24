import React from 'react'
import styles from '../styles/Societa.module.css'

const Societa = () => {
  return (
    <div className={styles.container}>
        <div className={styles.societa}>
            <span>SOCIETA</span>
            <h1>Polisportiva dilettantistica virtus baronissi dal 2000</h1>
            <h3>Staff</h3>
            <ul>
                <li>Presidente: De Chiara Agostino</li>
                <li>Vice presidente: Spisso Aniello</li>
                <li>Segretario: De chiara Valeria</li>
                <li>Allenatore under 19: Abundo Carlo</li>
                <li>Allenatore under 17: Spisso Gerardo/Di Giuseppe Alessio</li>
                <li>Allenatore under 17: Di Giuseppe Alessio/Senatore Attilio</li>
                <li>Istruttori minibasket: Rizzo Michele - Spisso Gerardo - Senatore Attilio - Di Giuseppe Alessio</li>
            </ul>
            <h3 style={{marginBottom: '10px'}}>Sede</h3>
            <p>VIA MARCONI, 13 C/O DE CHIARA Agostino 84081 BARONISSI (SA)</p>

            <h3 style={{marginBottom: '10px'}}>Campo di gioco</h3>
            <p>Palestra Palairno Nando Nobile</p>
            <p>Via G. Fortunato 22</p>
            <p>TEL. 3921392228</p>
            <p>CF: 95089310650  Dona il tuo 5x1000 </p>

            <h3 style={{marginBottom: '10px'}}>Corsi</h3>
            <p>Lunedi - Mercoledi - Venerdi</p>
            <ul>
                <li>ore 16:00-17:00 Minibasket (2016-2013) - solo lunedi</li>
                <li>ore 17:00-18:00 Minibasket (2012-2011)</li>
                <li>ore 18:00-19:00 Under 15 (2010-2007)</li>
                <li>ore 19:00-20:15 Under 17 (2006-2005)</li>
                <li>ore 20:15-21:30 Under 19 (2004-2003-2002)</li>
            </ul>
            <p>Martedi - Giovedi</p>
            <ul>
                <li>ore 16:30-17:30 Minibasket (2016-2013)</li>
            </ul>
            <p>Sabato</p>
            <ul>
                <li>ore 16:00-17:30 Under 19 (2004-2003-2002)</li>
            </ul>

        </div>
        <div className={styles.imgContainer}>
            <img src="/foto-staff-1.jpeg" alt="" />
            <img src="/foto-staff-2.jpeg" alt="" />
            <img src="/foto-staff-3.jpeg" alt="" />
            <img src="/foto-staff-4.jpeg" alt="" />
            <img src="/foto-staff-6.jpeg" alt="" />
            <img src="/foto-staff-7.jpeg" alt="" />
            <img src="/foto-staff-8.jpeg" alt="" />
            <img src="/foto-staff-9.jpeg" alt="" />
            <img src="/foto-staff-10.jpeg" alt="" />
            
        </div>
    </div>
  )
}

export default Societa