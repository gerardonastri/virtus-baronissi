import React, { useEffect, useState, useContext } from 'react';
import {AuthContext} from '../../context/authContext/AuthContext';
import {login} from '../../context/authContext/apiCalls'
import {useRouter} from "next/router";
import {logout} from '../../context/authContext/actions';
import styles from '../../styles/Section.module.css';
import { axiosReq } from '../../util/apiCalls';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import Sidebar from '../../components/Sidebar';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';


const news = () => {
    const [id, setId] = useState(null);
    const [data, setData] = useState(null)

    const {user, dispatch} = useContext(AuthContext)
    const router = useRouter();

    useEffect(() => {
        const pushUser = async () =>  {
            if(!user){
                router.push('/login')
            }
        }
        
        const getData = async () => {
            let id = location.pathname.split('/')[2]
            setId(id)

            const res = await axiosReq(`${id}`)
            setData(res.data)
        }
        pushUser()
        getData()
    }, [])

    const handleDelete = async (newsId) => {
        try {
            const res = await axiosReq.delete(`${id}?id=${newsId}`)
            router.reload()
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.navbar}>
            <h2>Admin Page</h2>
            <div className={styles.links}>
                <LogoutIcon />
                <NotificationsNoneIcon />
                <SettingsIcon />
            </div>
        </div>
        <div className={styles.wrapper}>
            <Sidebar />
            <div className={styles.dataContainer}>
                <div className={styles.adminhome}>
                    <a href="/create/news" className={`${styles.link} ${styles.create}`}>Create</a>
                    <table className={styles.table}>
                        <thead className={styles.theaddark}>
                            <tr>
                                <th>title</th>
                                <th>desc</th>
                                <th>coverImg</th>
                                <th>images</th>
                                <th>body</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map(news => (
                                    <tr key={news._id}>
                                        <td>{news.title}</td>
                                        <td>{news.desc.split(0,80)}</td>
                                        <td>{news.coverImg}</td>
                                        <td className={styles.password}></td>
                                        <td>{news.body.slice(0,50)}</td>
                                        <td>
                                            <a href={`/edit/news/${news._id}`} className={`${styles.btn } ${styles.bordershadow} ${styles.update}`}>
                                                <span className={styles.textgradient} style={{color: 'white'}}><EditOutlinedIcon /></span>
                                            </a>

                                            
                                            <button className={styles.btn} onClick={() => handleDelete(news._id)}><ClearOutlinedIcon /></button>
                                        </td>
                                    </tr>   
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
  )
}

export default news