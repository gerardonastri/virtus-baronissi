import React, {useEffect, useState} from 'react';
import styles from '../styles/News.module.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {axiosReq} from '../util/apiCalls'



const News = () => {
    const [news, SetNews] = useState(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                const res = await axiosReq.get('featured');
                SetNews(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getNews()
    }, [])

  return (
    <>
        {news?.length > 0 && (
            <div className={styles.container}>
            <h1>Recent News</h1>
            <div className={styles.wrapper}>
                {news?.map(news => (
                    <div className={styles.card}>
                        <img src={news.coverImg} alt="" />
                        <h3 className={styles.title}>{news.title}</h3>
                        <span className={styles.time}>
                            <AccessTimeIcon />
                            Jun 16, 2022
                        </span>
                        <p className={styles.desc}>{news.desc.slice(0,80)}...</p>
                        <a href={`/news/${news._id}`} className={styles.more}>READ MORE <ArrowForwardIcon /> </a>
                    </div>
                ))}
            </div>
            </div>
        )}
    </>
  )
}

export default News