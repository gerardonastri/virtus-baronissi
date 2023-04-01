import React, {useState, useCallback} from 'react';
import styles from '../styles/Slider.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import {HiOutlineArrowLeft} from 'react-icons/hi'
import {HiOutlineArrowRight} from 'react-icons/hi'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
                <h1>Staff</h1>
                <Carousel showArrows={true} showThumbs={false} className={styles.responsiveSlide} showStatus={false}>
                        <img className={styles.img} src="foto-staff-1.jpeg" alt="immagine del personale virtus baronissi" />
                        <img className={styles.img} src="foto-staff-2.jpeg" alt="immagine del personale virtus baronissi" />
                        <img className={styles.img} src="foto-staff-3.jpeg" alt="immagine del personale virtus baronissi" />
                        <img className={styles.img} src="foto-staff-4.jpeg" alt="immagine del personale virtus baronissi" />
                    
                        <img className={styles.img} src="foto-staff-6.jpeg" alt="immagine del personale virtus baronissi" />
                        <img className={styles.img} src="foto-staff-7.jpeg" alt="immagine del personale virtus baronissi" />
                        <img className={styles.img} src="foto-staff-8.jpeg" alt="immagine del personale virtus baronissi" />
                        <img className={styles.img} src="foto-staff-9.jpeg" alt="immagine del personale virtus baronissi" />
                    
                        <img className={styles.img}  src="foto-staff-10.jpeg" alt="immagine del personale virtus baronissi" />
                        <img className={styles.img}  src="foto-staff-11.jpeg" alt="immagine del personale virtus baronissi" />
                    
                </Carousel>
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
                    <button name='scroll slider to left' className={styles.embla__prev} onClick={scrollPrev}>
                        <HiOutlineArrowLeft />
                    </button>
                    <button name='scroll slider to right' className={styles.embla__next} onClick={scrollNext}>
                        <HiOutlineArrowRight />
                    </button>
                </div>
            </div>
      </div>
    );
}

export default Slider