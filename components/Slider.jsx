import React, {useState, useCallback} from 'react';
import styles from '../styles/Slider.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import {HiOutlineArrowLeft} from 'react-icons/hi'
import {HiOutlineArrowRight} from 'react-icons/hi'

const Slider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel()
    
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])
    

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.embla} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        <div className={styles.embla__slide}>
                            <img src="foto-staff-1.jpeg" alt="immagine del personale virtus baronissi" />
                            <img src="foto-staff-2.jpeg" alt="immagine del personale virtus baronissi" />
                            <img src="foto-staff-3.jpeg" alt="immagine del personale virtus baronissi" />
                            <img src="foto-staff-4.jpeg" alt="immagine del personale virtus baronissi" />
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="foto-staff-6.jpeg" alt="immagine del personale virtus baronissi" />
                            <img src="foto-staff-7.jpeg" alt="immagine del personale virtus baronissi" />
                            <img src="foto-staff-8.jpeg" alt="immagine del personale virtus baronissi" />
                            <img src="foto-staff-9.jpeg" alt="immagine del personale virtus baronissi" />
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="foto-staff-10.jpeg" alt="immagine del personale virtus baronissi" />
                            <img src="foto-staff-11.jpeg" alt="immagine del personale virtus baronissi" />
                        </div>
                    </div>
                    <button className={styles.embla__prev} onClick={scrollPrev}>
                        <HiOutlineArrowLeft />
                    </button>
                    <button className={styles.embla__next} onClick={scrollNext}>
                        <HiOutlineArrowRight />
                    </button>
                </div>
            </div>
      </div>
    );
}

export default Slider