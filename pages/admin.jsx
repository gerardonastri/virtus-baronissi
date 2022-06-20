import React, { useContext, useEffect } from 'react'
import {AuthContext} from '../context/authContext/AuthContext';
import {login} from '../context/authContext/apiCalls'
import {useRouter} from "next/router";
import {logout} from '../context/authContext/actions';
import styles from '../styles/Admin.module.css';
import { useState } from 'react';
import { axiosReq } from '../util/apiCalls';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import Sidebar from '../components/Sidebar';
import AdminOverview from '../components/AdminOverview';




const admin = () => {
    const {user, dispatch} = useContext(AuthContext)
    const router = useRouter();
    const [users, setUsers] = useState(null)

    useEffect(() => {
        const pushUser = async () =>  {
            if(!user){
                router.push('/login')
            }
        }
        const getData = async () => {
          const userRes = await axiosReq('user')
          setUsers(userRes)
        }
        pushUser()
        getData()
    }, [])

  /*
    if (typeof window) {
        window.onbeforeunload = () => {
          dispatch(logout())
        }
      }*/

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
        <AdminOverview />
      </div>
    </div>
  )
}

export default admin