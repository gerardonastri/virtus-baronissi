import React from 'react';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';


const Navbar = () => {

    const [isActive, setIsActive] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className={styles.container}>
        <img src="/logo.png" alt="" />
        <div className={styles.links}>
            <div className={isActive ? `${styles.menu} ${styles.active}` : styles.menu}>
                <a href="/home">Home</a>
                <a href="/contact">Contatti</a>
                <a href="/news">News</a>
                <span href="" style={{display: 'inline-flex', alignItems: 'center'}}>
                    Giovanili {showDropDown ? <ArrowDropUpIcon onClick={() => setShowDropDown(prev => !prev)} /> : <ArrowDropDownIcon onClick={() => setShowDropDown(prev => !prev)} />}
                    <div className={(showDropDown) ? `${styles.dropdown} ${styles.show}` : styles.dropdown}>
                        <a href="#!"><SportsBasketballIcon /> Under 19</a>
                        <a href="#!"><SportsBasketballIcon /> Under 17</a>
                        <a href="#!"><SportsBasketballIcon /> Under 15</a>
                        <a href="#!"><SportsBasketballIcon /> Minibasket</a>
                    </div>
                </span>
            </div>
            <div onClick={() => {
                setIsActive(prev => !prev);
                setShowDropDown(false)
            }} className={isActive ? `${styles.hamburger} ${styles.active}` : styles.hamburger}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </div>
    </div>
  )
}

export default Navbar