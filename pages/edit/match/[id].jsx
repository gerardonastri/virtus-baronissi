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

const editMatch = () => {
    const [match, setMatch] = useState(null);
    const [opposingTeam, setOpposingTeam] = useState(null);
    const [opposingTeamImg, setOpposingTeamImg] = useState(null);
    const [newOpposingTeamImg, setNewOpposingTeamImg] = useState(null);
    const [virtusScore, setVirtusScore] = useState(0);
    const [opposingTeamScore, setOpposingTeamScore] = useState(0);
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [data, setData] = useState("");
    const [luogo, setLuogo] = useState("");
    
    const router = useRouter()

    useEffect(() => {
        const getData = async () => {
            const id = location.pathname.split('/')[3];
            const res = await axiosReq.get(`match?id=${id}`)
            setId(res.data._id)
            setTitle(res.data.title)
            setDesc(res.data.desc)
            setCoverImg(res.data.coverImg)
            setBody(res.data.body)
            setImages(res.data.images)
        }
        getData
    },[])


    const createMatches = async () => {
      try {
        if(newOpposingTeamImg){
          const fileData = await storage.ref(`matches/${opposingTeamImg.name}`).put(opposingTeamImg)
          const imageSrc = await fileData.ref.getDownloadURL()
          const res = await axiosReq.post('match', {
            opposingTeam,
            opposingTeamImg: imageSrc,
            virtusScore,
            opposingTeamScore,
            category,
            type,
            data,
            luogo
          })
        } else {
          const res = await axiosReq.post('match', {
            opposingTeam,
            virtusScore,
            opposingTeamScore,
            category,
            type,
            data,
            luogo
          })
        }
      router.push('/admin/match')
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
              <label htmlFor="opposingTeam">Squadra Avversaria</label>
              <input type="text" name="opposingTeam" id="opposingTeam" value={opposingTeam} onChange={(e) => setOpposingTeam(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="opposingTeamImg">Immagine squadra avversaria</label>
              <input type="file" name="opposingTeamImg" id="opposingTeamImg" value={newOpposingTeamImg} onChange={(e) => setNewOpposingTeamImg(e.target.files[0])} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="virtusScore">Punteggio Virtus</label>
              <input type="text" name="virtusScore" id="virtusScore" value={virtusScore} onChange={(e) => setVirtusScore(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="opposingTeamScore">Punteggio squadra avversaria</label>
              <input name="opposingTeamScore" id="opposingTeamScore" value={opposingTeamScore} onChange={(e) => setOpposingTeamScore(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="categoria">Categoria</label>
              <input name="categoria" id="categoria" type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="type">Tipo(prossimo o ultimo)</label>
              <input name="type" id="type" type="text" value={type} onChange={(e) => setType(e.target.value)} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="data">Data</label>
              <input name="data" id="data" type="text" value={data} onChange={(e) => setData(e.target.value)} />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="luogo">Luogo</label>
              <input name="luogo" id="luogo" type="text" value={luogo} onChange={(e) => setLuogo(e.target.value)} />
            </div>
            <button onClick={createMatches}>Submit</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default editMatch