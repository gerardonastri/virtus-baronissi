import React from 'react';
import styles from '../styles/News.module.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const News = () => {
  return (
    <div className={styles.container}>
        <h1>News</h1>
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img src="https://www.nbareligion.com/wp-content/uploads/2021/10/draymond-green.jpeg" alt="" />
                <h3 className={styles.title}>NBA, Draymond Green: “Boston ha talento, ma non è come affrontare LeBron”</h3>
                <span className={styles.time}>
                    <AccessTimeIcon />
                    Jun 16, 2022
                </span>
                <p className={styles.desc}>Alla vigilia di Gara 6, il numero 23 degli Warriors ricorda la sfide con i Cavs di LeBron</p>
                <a href="#" className={styles.more}>READ MORE <ArrowForwardIcon /> </a>
            </div>

            <div className={styles.card}>
                <img src="https://www.nbareligion.com/wp-content/uploads/2021/10/draymond-green.jpeg" alt="" />
                <h3 className={styles.title}>NBA, Draymond Green: “Boston ha talento, ma non è come affrontare LeBron”</h3>
                <span className={styles.time}>
                    <AccessTimeIcon />
                    Jun 16, 2022
                </span>
                <p className={styles.desc}>Alla vigilia di Gara 6, il numero 23 degli Warriors ricorda la sfide con i Cavs di LeBron</p>
                <a href="#" className={styles.more}>READ MORE <ArrowForwardIcon /> </a>
            </div>

            <div className={styles.card}>
                <img src="https://www.nbareligion.com/wp-content/uploads/2021/10/draymond-green.jpeg" alt="" />
                <h3 className={styles.title}>NBA, Draymond Green: “Boston ha talento, ma non è come affrontare LeBron”</h3>
                <span className={styles.time}>
                    <AccessTimeIcon />
                    Jun 16, 2022
                </span>
                <p className={styles.desc}>Alla vigilia di Gara 6, il numero 23 degli Warriors ricorda la sfide con i Cavs di LeBron</p>
                <a href="#" className={styles.more}>READ MORE <ArrowForwardIcon /> </a>
            </div>
        </div>
    </div>
  )
}

export default News