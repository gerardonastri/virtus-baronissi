import React, { useEffect, useState, useContext } from 'react';
import {AuthContext} from '../../../context/authContext/AuthContext';
import {useRouter} from "next/router";
import styles from '../../../styles/Section.module.css';
import { axiosReq } from '../../../util/apiCalls';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import Sidebar from '../../../components/Sidebar';

const editStaff = () => {
    const [personale, setPersonale] = useState('');
    const [tipo, setTipo] = useState('');
    

    const router = useRouter();
    const {user, dispatch} = useContext(AuthContext)

    useEffect(() => {
        const pushUser = async () =>  {
            if(!user){
                router.push('/login')
            }
        }
        const getData = async () => {
            const id = location.pathname.split('/')[3];
            const res = await axiosReq.get(`staff?id=${id}`)
            setTipo(res.data.name)
            setPersonale(res.data.allenatori)
        }
        
        getData();
        pushUser()
    }, [])


    const edit = async () => {
      let newPersonale = personale;
      if(typeof personale === 'string'){
        newPersonale = personale.trim().split(",")
      };
      try {
        const id2 = location.pathname.split('/')[3];
        const res = await axiosReq.put(`staff?id=${id2}`, {
            name: tipo,
            personale: newPersonale
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
          <h1>Upload Image</h1>
          <div className={styles.form}>

            <div className={styles.formGroup}>
              <label htmlFor="tipo">Tipo</label>
              <input type="text" name="tipo" id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="personale">Personale (divere con virgole: attilio,carlo,gerardo)</label>
              <input type="text" name="personale" id="personale" value={personale} onChange={(e) => setPersonale(e.target.value)} />
            </div>

            <button onClick={edit}>Submit</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default editStaff