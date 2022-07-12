import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from '../styles/Overview.module.css';
import {axiosReq} from '../util/apiCalls'
import Moment from 'react-moment';
import 'moment-timezone';


const AdminOverview = () => {
  const [users, setUsers] = useState(null);
  const [news, setNews] = useState(null);
  const [messages, setMessages] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await axiosReq.get('info');
      console.log(res.data);
      setUsers(res.data.users)
      setNews(res.data.news)
      setMessages(res.data.messages)
    }
    getData()
  }, [])


  return (
    <div className={styles.adminhome}>
      <div className={styles.featured}>
        <div className={styles.featuredItem}>
                  <span className={styles.featuredTitle}>News</span>
                  <div className={styles.featuredMoneyContainer}>
                      <span className={styles.featuredMoney}>{news?.length}</span>
                      <span className={styles.featuredMoneyRate}> {/*arrow down*/}
                        <i className={`${styles.fas}  ${styles.featuredIcon} ${styles.negative}`}></i>
                      </span>
                    </div>
                    <span className={styles.featuredSub}></span>
        </div>
                <div className={styles.featuredItem}>
                  <span className={styles.featuredTitle}>Messaggi</span>
                  <div className={styles.featuredMoneyContainer}>
                    <span className={styles.featuredMoney}>{messages?.length}</span>
                    <span className={styles.featuredMoneyRate}> {/*arrow down*/}
                       <i className={`${styles.fas}  ${styles.featuredIcon} ${styles.negative}`}></i>
                    </span>
                  </div>
                  <span className={styles.featuredSub}></span>
                </div>
                <div className={styles.featuredItem}>
                  <span className={styles.featuredTitle}>Users</span>
                  <div className={styles.featuredMoneyContainer}>
                    <span className={styles.featuredMoney}>{users?.length}</span>
                    <span className={styles.featuredMoneyRate}> {/*arrow down*/}
                      <i className={`${styles.fas}  ${styles.featuredIcon} ${styles.negative}`}></i>
                    </span>
                  </div>
                  <span className={styles.featuredSub}></span>
                </div>
      </div>
              <div className={styles.homeWidgets}>
                <div className={styles.widgetSm}>
                    <span className={styles.widgetSmTitle}>Admins</span>
                    <ul className={styles.widgetSmList}>
                      {users?.map(user => (
                        <li className={styles.widgetSmListItem}>
                          <img
                            src= "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                            alt=""
                            className={styles.widgetSmImg}
                          />
                          <div className={styles.widgetSmUser}>
                            <span className={styles.widgetSmUsername}>{user.username}</span>
                          </div>
                          <button className={styles.widgetSmButton}>
                            {/*<Visibility className={styles.widgetSmIcon}/>*/}
                           <a href="/admin/user">Display</a>
                          </button>
                        </li>
                      ))}
                        
                    </ul>
                </div>
                <div className={styles.widgetLg}>
                    <h3 className={styles.widgetLgTitle} style={{marginTop: 0}}>Messaggi</h3>
                    <table className={styles.widgetLgTable}>
                     <tbody>
                     <tr className={styles.widgetLgTr}>
                        <th className={styles.widgetLgTh}>Nome</th>
                        <th className={styles.widgetLgTh}>Data</th>
                        <th className={styles.widgetLgTh}>Email</th>
                        <th className={styles.widgetLgTh}>Status</th>
                      </tr>
                      {messages?.map(message => (
                        <tr className={styles.widgetLgTr}>
                          <td className={styles.widgetLgUser}>
                            <img
                              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                              alt=""
                              className={styles.widgetLgImg}
                            />
                            <span className={styles.widgetLgName}>{message.nome}</span>
                          </td>
                          <td className={styles.widgetLgDate} style={{color: 'gray'}}>
                          <Moment format="DD/MM/YYYY, hh:mm">
                            {message.createdAt}
                          </Moment>
                          </td>
                          <td className={styles.widgetLgAmount}>{message.email}</td>
                          <td className={styles.widgetLgStatus}>
                              {message.risposto ? (
                                <span className={`${styles.widgetLgButton} ${styles.Approved}`}>Risposto</span>
                              ) : (
                                <span className={`${styles.widgetLgButton} ${styles.Pending}`}>Non Risposto</span>
                              )}
                          </td>
                      </tr>
                      ))}
                      
                     </tbody>
                    </table>
                  </div>
              </div>
            </div>
  )
}

export default AdminOverview