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

const editNews = () => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [coverImg, setCoverImg] = useState('');
    const [newCoverImg, setNewCoverImg] = useState(null);
    const [body, setBody] = useState('');
    const [images, setImages] = useState([]);
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
            const res = await axiosReq.get(`news?id=${id}`)
            setId(res.data._id)
            setTitle(res.data.title)
            setDesc(res.data.desc)
            setCoverImg(res.data.coverImg)
            setBody(res.data.body)
            setImages(res.data.images)
        }
        pushUser()
        getData();
    }, [])


    const edit = async () => {
       if(newCoverImg){
            const fileData = await storage.ref(`news/${newCoverImg.name}`).put(newCoverImg)
            const imageSrc = await fileData.ref.getDownloadURL()
            try {
              const res = await axiosReq.put(`news?id=${id}`, {
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
       } else {
        try {
            const res = await axiosReq.put(`news?id=${id}`, {
              title,
              desc,
              coverImg,
              body,
              images
            })
            router.push('/admin/news')
          } catch (error) {
            console.log(error);
          }
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
              <input type="text" name="title" id="title" placeholder={title} value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="desc">Desc</label>
              <input type="text" name="desc" id="desc" placeholder={desc} value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="coverImg">CoverImg</label>
              <input type="file" name="coverImg" id="coverImg" onChange={(e) => setNewCoverImg(e.target.files[0])} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="body">Body</label>
              <textarea name="body" id="body" cols="30" rows="10" defaultValue={body}  onChange={(e) => setBody(e.target.value)}>
              </textarea>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="images">Images</label>
              <input type="file" name="images" id="images"  onChange={(e) => setImages(e.target.files[0])} />
            </div>
            <button onClick={edit}>Submit</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default editNews