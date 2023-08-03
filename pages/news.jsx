import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/NewsPage.module.css'
import { useEffect } from 'react'
import {axiosReq} from '../util/apiCalls'
import { Pagination as Pages } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Head from 'next/head'

const news = () => {
    const [news, SetNews] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage, setNewsPerPage] = useState(6);
    

    useEffect(() => {
        const getNews = async () => {
            try {
                const res = await axiosReq.get('news');
                SetNews(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getNews()
    }, [])

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstnews = indexOfLastNews - newsPerPage;
    const currentnews = news?.slice(indexOfFirstnews, indexOfLastNews);
    
    const handleChange = (page) => {
        setCurrentPage(page);
        
    }

  return (
    <div className={styles.container}> 
    <Head>
        <title>Virtus baronissi | News</title>
        <meta name="description" content="News della virtus baronissi" />
        <link rel="icon" href="http://www.virtusbaronissi..org/varie/LOGO.jpg" />
    </Head>
    <Navbar />
    <div className={styles.wrapper}>
        <h1>News</h1>
        {news?.length > 0 ? (
            <div className={styles.newsContainer}>
            {news?.map(news => (
                <div className={styles.card} key={news.title}>
                 <img src={news.coverImg} alt="immagine della news" />
                 <h3 className={styles.title}>{news.title}</h3>
                 <span className={styles.time}>
                     <AccessTimeIcon />
                     Jun 16, 2022
                 </span>
                 <p className={styles.desc}>{news.desc.slice(0,100)}...</p>
                 <a href={`/news/${news._id}`}  className={styles.more}>Leggi di più <ArrowForwardIcon /> </a>
                </div>
            ))}
        </div>
        ) : (
            <h3 className={styles.nonews}>Non ci sono novità</h3>
        )}
        <Pages onChange={(e) => handleChange(e.target.textContent)} sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '10px'}} count={Math.ceil(news?.length / newsPerPage)} />
    </div>

    <Footer />
    </div>
  )
}

export default news