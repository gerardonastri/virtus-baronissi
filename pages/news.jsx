import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/NewsPage.module.css'
import { useEffect } from 'react'
import {axiosReq} from '../util/apiCalls'
import { Pagination as Pages } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const news = () => {
    const [news, SetNews] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage, setNewsPerPage] = useState(8);
    

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
    <Navbar />
    <div className={styles.wrapper}>
        <h1>News</h1>
        <div className={styles.newsContainer}>
            {news?.map(news => (
                <div className={styles.card}>
                 <img src={news.coverImg} alt="" />
                 <h3 className={styles.title}>{news.title}</h3>
                 <span className={styles.time}>
                     <AccessTimeIcon />
                     Jun 16, 2022
                 </span>
                 <p className={styles.desc}>{news.desc}</p>
                 <a href={`/news/${news._id}`}  className={styles.more}>READ MORE <ArrowForwardIcon /> </a>
                </div>
            ))}
        </div>
        <Pages onChange={(e) => handleChange(e.target.textContent)} sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '10px'}} count={Math.ceil(news?.length / newsPerPage)} />
    </div>

    <Footer />
    </div>
  )
}

export default news