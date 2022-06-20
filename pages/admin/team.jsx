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



const team = () => {
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
        data[0].images.map(img => {
            console.log(img);
        })
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
                    <a href="/create/team" className={`${styles.link} ${styles.create}`}>Create</a>
                    <table className={styles.table}>
                        <thead className={styles.theaddark}>
                            <tr>
                                <th>name</th>
                                <th>images</th>
                                <th>roaster</th>
                                <th>classifica</th>
                                <th>calendario</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map(team => (
                                <tr>
                                    <td>{team.name}</td>
                                    <td>
                                        {team.images.map(img => (
                                            <div key={img}>{img.slice(7,50)}</div>
                                        ))}
                                    </td>
                                    <td>
                                        {team.roaster.map(persona => (
                                            <div>{persona.nome}</div>
                                        ))}
                                    </td>
                                    <td>
                                        {team.classifica.map(squadra => (
                                            <div>{squadra.nome}</div>
                                        ))}
                                    </td>
                                    <td>
                                        {team.calendario.map(calendario => (
                                            <div>{calendario.partita}</div>
                                        ))}
                                    </td>
                                    <td>
                                        <a href={`/edit/team/${team._id}`} className={`${styles.btn } ${styles.bordershadow} ${styles.update}`}>
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

export default team