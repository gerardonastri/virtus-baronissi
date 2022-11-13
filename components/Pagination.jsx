import React, { useEffect, useState } from 'react';
import styles from '../styles/Pagination.module.css';
import {axiosReq} from '../util/apiCalls'
import axios from 'axios'
import { Pagination as Pages } from '@mui/material';

const Pagination = ({images}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPerPage, setImagesPerPage] = useState(8);

    useEffect(() => {
        /*const getImages = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos', {
                params: {
                    _limit: 80
                }
            })
            setImages(res.data)
        }

        getImages()*/
    }, [])  

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstimages = indexOfLastImage - imagesPerPage;
    const currentImages = images?.slice(indexOfFirstimages, indexOfLastImage);
    
    const handleChange = (page) => {
        setCurrentPage(page);
        
    }

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            {currentImages?.map(img => (
                <a href={`${img}`} target="_blank">
                    <img src={img} alt="immagine della squadra" />
                </a>
            ))}
        </div>
        <Pages onChange={(e) => handleChange(e.target.textContent)} sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '10px'}} count={Math.ceil(images?.length / imagesPerPage)} />
    </div>
  )
}

export default Pagination