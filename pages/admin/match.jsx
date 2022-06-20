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


const match = () => {
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

    const handleDelete = async () => {

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
                    <a href="/create/match" className={`${styles.link} ${styles.create}`}>Create</a>
                    <table className={styles.table}>
                        <thead className={styles.theaddark}>
                            <tr>
                                <th>opposingTeam</th>
                                <th>opposingTeamImg</th>
                                <th>virtusScore</th>
                                <th>opposingTeamScore</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map(match => (
                                <tr>
                                    <td>{match.opposingTeam}</td>
                                    <td>{match.opposingTeamImg}</td>
                                    <td>{match.virtusScore}</td>
                                    <td>{match.opposingTeamScore}</td>
                                    <td>
                                    <a href={`/edit/news/${match._id}`} className={`${styles.btn } ${styles.bordershadow} ${styles.update}`}>
                                            <span className={styles.textgradient} style={{color: 'white'}}><EditOutlinedIcon /></span>
                                        </a>
        
                                        <button className={styles.btn} onClick={handleDelete}><ClearOutlinedIcon /></button>
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

export default match