import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from '../styles/Featured.module.css'
import {axiosReq} from '../util/apiCalls'
import Image from 'next/image';

const Fetatured = () => {
  const [lastMatch, setLastMatch] = useState(null);
  const [nextMatches, setNextMatches] = useState(null);
  const [nextMatch, setNextMatch] = useState(null);

  useEffect(() => {
      const getData = async () => {
        try {
          const res = await axiosReq.get('match?sort=yes')
          setLastMatch(res.data.lastMatch)
          setNextMatches(res.data.nextMatches)
          setNextMatch(res.data.lastMatchMinibasket)
        } catch (error) {
            console.log(error);
        }
      }
      getData()
  }, [])


  console.log(nextMatches);

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.last}>ULTIMO INCONTRO</h1>
      <div className={styles.box}>
        <div className={styles.team}>
          <img src="/logo.png" alt="logo virtus baronissi" />
          <h2>Virtus Baronissi</h2>
        </div>
        <div className={styles.punteggio}>
          <h1>{lastMatch?.virtusScore} - {lastMatch?.opposingTeamScore}</h1>
        </div>
        <div className={styles.team}>
          <img src={lastMatch?.opposingTeamImg} alt="logo squadra avversaria" />
          <h2>{lastMatch?.opposingTeam}</h2>
        </div>
      </div> */}


      {/* <div className={styles.nextContainer}>
        <div className={styles.next}>
          <span></span>
          <h1>PROSSIMI INCONTRI</h1>
        </div>

        <div className={styles.matchContainer}>
          {nextMatches?.map(match => (
          <div className={`${styles.box} ${styles.responsive}`} style={{height: "fit-content"}}>
              <h3>{match.data} - {match.luogo}</h3>
            <div className={styles.team2}>
              <img src="/logo.png" className={styles.virtusImg} alt="virtus baronissi" style={{ height: '120px'}} />
              <h2>Virtus Baronissi</h2>
            </div>
            <div className={styles.vs} >
              <h1>VS</h1>
            </div>
            <div className={styles.team2}>
              <img src={match.opposingTeamImg} className={styles.guest} alt="logo squadra avversaria" style={{ height: '120px'}} />
              <h2>{match.opposingTeam}</h2>
            </div>
            <div className={styles.category}>
              <span>{match.category}</span>
            </div>
          </div>
          ))}
        </div>

      </div> */}

      {nextMatch && (<div className={styles.nextMinibasket}>
        <div className={styles.next}>
          <span>Minibasket</span>
          <h1>PROSSIMI INCONTRI</h1>
        </div>
        <div className={styles.matchContainer}>
          <div className={`${styles.box} ${styles.responsive}`} style={{height: "fit-content"}}>
            <h3>{nextMatch?.data} - {nextMatch?.luogo}</h3>
            <div className={styles.team2}>
              <Image src="/logo.png" className={styles.virtusImg} alt="virtus baronissi" height={120} />
              <h2>Virtus Baronissi</h2>
            </div>
            <div className={styles.vs} >
              <h1>VS</h1>
            </div>
            <div className={styles.team2}>
              <Image src={nextMatch?.opposingTeamImg} className={styles.guest} alt="logo squadra avversaria" height={120} />
              <h2>{nextMatch?.opposingTeam}</h2>
            </div>
          </div>
        </div>
      </div>)}

    </div>
  )
}

export default Fetatured