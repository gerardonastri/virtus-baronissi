import React from 'react'


const OldSlider = () => {

    const [slideIndex, setIndex] = useState(0);
    const images = [
        "/under19.png",
        "/under17-2.jpg",
        "/under15.jpg",
        "/minibasket1.jpg",
        "/minibasket2.jpg"
    ]
    const teams = [
        'Under 19',
        'Under 17',
        'Under 15',
        'Aquilotti',
        'Pulcini'
    ]
    const links = [
        "under19",
        "under17",
        "under15",
        "minibasket"
    ]
    const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(slideIndex !== 0 ? slideIndex-1 : 4)
        }
        if(direction==="r"){
            setIndex(slideIndex !== 4 ? slideIndex+1 : 0)
        }
    }

    const moveDot = (index) => {
        setIndex(index)
    }

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            {images.map((img, i) => (
                    <div className={slideIndex === i ? `${styles.slide} ${styles.activeAnim}`: styles.slide}  key={i}>
                        <a href={`/squadra/${links[i]}`} className={styles.team}>{teams[i]}</a>
                        <img src={img} alt="" />
                    </div>
                ))}

                <button className={`${styles.btnSlide} ${styles.prev}`} onClick={() => handleArrow('l')}>
                    <img src="/left-arrow.svg" alt="" />
                </button>

                <button className={`${styles.btnSlide} ${styles.next}`} onClick={() => handleArrow('r')}>
                    <img src="/right-arrow.svg" alt="" />
                </button>

                <div className={styles.containerDots}>
                    {Array.from({length: 5}).map((item, index) => (
                        <div onClick={() => moveDot(index)} className={slideIndex === index ? `${styles.dot} ${styles.active}` : styles.dot}>

                        </div>
                    ))}
                </div>
        </div>
    </div>
  )
}

export default OldSlider