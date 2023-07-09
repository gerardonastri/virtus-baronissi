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

const createOrario= () => {
    const [orarioInizio, setOrarioInizio] = useState('');
    const [orarioFine, setOrarioFine] = useState('');
    const [categoria, setCategoria] = useState('');
    const [anni, setAnni] = useState('');
    const [eccezione, setEccezione] = useState('');
    const [giorni, setGiorni] = useState(0);
    const router = useRouter()


    const handleCreate = async () => {
      try {
        const res = await axiosReq.post('orari', {
          orarioInizio,
          orarioFine,
          categoria,
          anni,
          eccezione,
          giorni
        })
        router.push('/admin/orario')
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
              <label htmlFor="orarioInizio">Orario di Inizio (es: 16:45)</label>
              <input type="text" name="orarioInizio" id="orarioInizio" value={orarioInizio} onChange={(e) => setOrarioInizio(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="orarioFine">Orario di Fine (es: 17:45)</label>
              <input type="text" name="orarioFine" id="orarioFine" value={orarioFine} onChange={(e) => setOrarioFine(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="categoria">Categoria (es: minibasket)</label>
              <input type="text" name="categoria" id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="anni">Anni (es: 2010-2012)</label>
              <input type="text" name="anni" id="anni" value={anni} onChange={(e) => setAnni(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="eccezione">Note (es: lunedi 16:45-18:00)</label>
              <input type="text" name="eccezione" id="eccezione" value={eccezione} onChange={(e) => setEccezione(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="giorni">Giorni (es: lun-mer-ven 1, mar-gio 2, sab 1)</label>
              <input type="number" name="giorni" id="giorni" value={giorni} onChange={(e) => setGiorni(e.target.value)} />
            </div>
            <button onClick={handleCreate}>Submit</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default createOrario