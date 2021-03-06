import React, { useEffect, useState } from 'react';
import styles from '../../styles/SigleNews.module.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { axiosReq } from '../../util/apiCalls';
import AccessTimeIcon from '@mui/icons-material/AccessTime';



  
  
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
        <Navbar />
        <div className={styles.wrapper}>
            <h1>{data?.title}</h1>
            <div className={styles.flex}>
                <img src={data?.coverImg} alt="" />
                <div className={styles.otherNews}>
                    <h2>Other News</h2>
                    <hr />
                    {news?.map(news => (
                        <div className={styles.sigleNew}>
                        <h3>{news.title}</h3>
                        <span className={styles.time}>
                        <AccessTimeIcon />
                        Jun 16, 2022
                        </span>
                        </div>
                    ))}
                </div>
            </div>
            <p>{data?.desc}</p>
            <div className={styles.body}>
                {data?.body}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Squadra