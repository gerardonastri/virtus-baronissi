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

const createNews = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [coverImg, setCoverImg] = useState('');
    const [body, setBody] = useState('');
    const [images, setImages] = useState([]);
    const router = useRouter()


    const createNews2 = async () => {
        const fileData = await storage.ref(`news/${coverImg.name}`).put(coverImg)
        const imageSrc = await fileData.ref.getDownloadURL()
            try {
              const res = await axiosReq.post('news', {
                title,
                desc,
                coverImg: imageSrc,
                body,
                images
              })
              router.push('/admin/news')
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
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="desc">Desc</label>
              <input type="text" name="desc" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="coverImg">CoverImg</label>
              <input type="file" name="coverImg" id="coverImg" onChange={(e) => setCoverImg(e.target.files[0])} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="body">Body</label>
              <textarea name="body" id="body" cols="30" rows="10" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="images">Images</label>
              <input type="file" name="images" id="images"  onChange={(e) => setImages(e.target.files[0])} />
            </div>
            <button onClick={createNews2}>Submit</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default createNews