import storage from '../../util/firebase';
import React, { useEffect, useState, useContext } from 'react';
import {AuthContext} from '../../context/authContext/AuthContext';
import {useRouter} from "next/router";
import {logout} from '../../context/authContext/actions';
import styles from '../../styles/Section.module.css';
import { axiosReq } from '../../util/apiCalls';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import Sidebar from '../../components/Sidebar';

const createStaff = () => {
    const [tipo, setTipo] = useState('');
    const [personale, setPersonale] = useState('');
    const router = useRouter()


    const handleCreate = async () => {
      const personaleArray = personale.trim().split(",")
      try {
        const res = await axiosReq.post('staff', {
          name: tipo,
          allenatori: personaleArray
        })
        router.push('/admin/staff')
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
          <h1>Create News</h1>
          <div className={styles.form}>

            <div className={styles.formGroup}>
              <label htmlFor="tipo">Tipo</label>
              <input type="text" name="tipo" id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="personale">Personale (divere con virgole: attilio,carlo,gerardo)</label>
              <input type="text" name="personale" id="personale" value={personale} onChange={(e) => setPersonale(e.target.value)} />
            </div>
            <button onClick={handleCreate}>Submit</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default createStaff