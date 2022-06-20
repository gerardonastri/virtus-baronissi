import React, { useEffect, useState, useContext } from 'react';
import {AuthContext} from '../../../context/authContext/AuthContext';
import {useRouter} from "next/router";
import {logout} from '../../../context/authContext/actions';
import styles from '../../../styles/Section.module.css';
import { axiosReq } from '../../../util/apiCalls';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import Sidebar from '../../../components/Sidebar';
import storage from '../../../util/firebase';

const editTeam = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [roaster, setRoaster] = useState([]);
    const [classifica, setClassifica] = useState([]);
    const [calendario, setCalendario] = useState([]);

    const router = useRouter();
    const {user, dispatch} = useContext(AuthContext)

    useEffect(() => {
      const pushUser = async () =>  {
        if(!user){
            router.push('/login')
        }
    }
        /*const getData = async () => {
            const id = location.pathname.split('/')[3];
            const res = await axiosReq.get(`team?id=${id}`)
            setId(res.data._id)
            setName(res.data.name)
            setRoaster(res.data.roaster)
            setClassifica(res.data.classifica)
            setCalendario(res.data.calendario)
        }
        
        getData();*/
        pushUser()
    }, [])


    const edit = async () => {
            const fileData = await storage.ref(`team/${img.name}`).put(img)
            const imageSrc = await fileData.ref.getDownloadURL()
            try {
                const id2 = location.pathname.split('/')[3];
              const res = await axiosReq.put(`team?id=${id2}`, {
                img: imageSrc
              })
              router.push('/admin/team')
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
              <label htmlFor="img">Img</label>
              <input type="file" name="img" id="img"  onChange={(e) => setImg(e.target.files[0])} />
            </div>
            <button onClick={edit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default editTeam