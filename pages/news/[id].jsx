import React, { useEffect, useState } from 'react';
import styles from '../../styles/SigleNews.module.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { axiosReq } from '../../util/apiCalls';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Head from 'next/head';



  
  
const Squadra = () => {
    const [id, setId] = useState(null);
    const [data, setData] = useState(null);
    const [news, setNews] = useState()

    
    
    useEffect(() => {
        const getData = async () => {
            let id = location.pathname.split('/')[2]
            const res = await axiosReq.get(`news?id=${id}`)
            setData(res.data)
        }
        const getNews = async () => {
            let id = location.pathname.split('/')[2]
            const res = await axiosReq.get(`news?cat=${id}`)
            setNews(res.data)
        }
        getNews()
        getData()
    }, [])

  return (
    <div className={styles.container}>
        <Head>
            <title>Virtus baronissi | News</title>
            <meta name="description" content="News della virtus baronissi" />
            <link rel="icon" href="http://www.virtusbaronissi.altervista.org/varie/LOGO.jpg" />
        </Head>
        <Navbar />
        <div className={styles.wrapper}>
            <div className={styles.flex}>
                <div>
                    <h1>{data?.title}</h1>
                    <p>{data?.desc}</p>
                    <img className={styles.coverImg} src={data?.coverImg} alt="" />
                </div>
                {/* <div className={styles.otherNews}>
                    {news?.length > 0 &&  (
                        <>
                        <h2>Altre News</h2>
                        <hr />
                        {news?.map(news => (
                            <a href={`/news/${news._id}`} className={styles.sigleNew}>
                                <h3>{news.title}</h3>
                                {/* <span className={styles.time}>
                                <AccessTimeIcon />
                                Jun 16, 2022
                            </a>
                        ))}
                        </>
                    )}
                </div> */}
            </div>
            <div className={styles.body}>
                {data?.body}
            </div>
            <div className={styles.images}>
                {data?.images?.map(img => (
                    <a href={img} target="_blank">
                        <img src={img} alt="" />
                    </a>
                ))}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Squadra