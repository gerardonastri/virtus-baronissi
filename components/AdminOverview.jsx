import React from 'react'
import styles from '../styles/Overview.module.css'


const AdminOverview = () => {
  return (
    <div className={styles.adminhome}>
      <div className={styles.featured}>
        <div className={styles.featuredItem}>
                  <span className={styles.featuredTitle}>Revanue</span>
                  <div className={styles.featuredMoneyContainer}>
                      <span className={styles.featuredMoney}>$2,415</span>
                      <span className={styles.featuredMoneyRate}> {/*arrow down*/}
                        -11.4 <i className={`${styles.fas}  ${styles.featuredIcon} ${styles.negative}`}></i>
                      </span>
                    </div>
                    <span className={styles.featuredSub}>Compared to last month</span>
        </div>
                <div className={styles.featuredItem}>
                  <span className={styles.featuredTitle}>Sales</span>
                  <div className={styles.featuredMoneyContainer}>
                    <span className={styles.featuredMoney}>$4,415</span>
                    <span className={styles.featuredMoneyRate}> {/*arrow down*/}
                      -1.4  <i className={`${styles.fas}  ${styles.featuredIcon} ${styles.negative}`}></i>
                    </span>
                  </div>
                  <span className={styles.featuredSub}>Compared to last month</span>
                </div>
                <div className={styles.featuredItem}>
                  <span className={styles.featuredTitle}>Cost</span>
                  <div className={styles.featuredMoneyContainer}>
                    <span className={styles.featuredMoney}>$2,225</span>
                    <span className={styles.featuredMoneyRate}> {/*arrow down*/}
                      +2.4  <i className={`${styles.fas}  ${styles.featuredIcon} ${styles.negative}`}></i>
                    </span>
                  </div>
                  <span className={styles.featuredSub}>Compared to last month</span>
                </div>
      </div>
              <div className={styles.homeWidgets}>
                <div className={styles.widgetSm}>
                    <span className={styles.widgetSmTitle}>New Join Members</span>
                    <ul className={styles.widgetSmList}>
                        <li className={styles.widgetSmListItem}>
                          <img
                            src= "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                            alt=""
                            className={styles.widgetSmImg}
                          />
                          <div className={styles.widgetSmUser}>
                            <span className={styles.widgetSmUsername}>John</span>
                          </div>
                          <button className={styles.widgetSmButton}>
                            {/*<Visibility className={styles.widgetSmIcon}/>*/}
                            Display
                          </button>
                        </li>
                        <li className={styles.widgetSmListItem}>
                            <img
                              src= "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                              alt=""
                              className={styles.widgetSmImg}
                            />
                            <div className={styles.widgetSmUser}>
                              <span className={styles.widgetSmUsername}>John</span>
                            </div>
                            <button className={styles.widgetSmButton}>
                              {/*<Visibility className={styles.widgetSmIcon}/>*/}
                              Display
                            </button>
                          </li>
                          <li className={styles.widgetSmListItem}>
                            <img
                              src= "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                              alt=""
                              className={styles.widgetSmImg}
                            />
                            <div className={styles.widgetSmUser}>
                              <span className={styles.widgetSmUsername}>John</span>
                            </div>
                            <button className={styles.widgetSmButton}>
                              {/*<Visibility className={styles.widgetSmIcon}/>*/}
                              Display
                            </button>
                          </li>
                          <li className={styles.widgetSmListItem} >
                            <img
                              src= "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                              alt=""
                              className={styles.widgetSmImg}
                            />
                            <div className={styles.widgetSmUser}>
                              <span className={styles.widgetSmUsername}>John</span>
                            </div>
                            <button className={styles.widgetSmButton}>
                              {/*<Visibility className={styles.widgetSmIcon} /> */}
                              Display
                            </button>
                          </li>
                          <li className={styles.widgetSmListItem} >
                            <img
                              src= "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                              alt=""
                              className={styles.widgetSmImg}
                            />
                            <div className={styles.widgetSmUser}>
                              <span className={styles.widgetSmUsername}>John</span>
                            </div>
                            <button className={styles.widgetSmButton}>
                              {/*<Visibility className={styles.widgetSmIcon} />*/}
                              Display
                            </button>
                          </li>
                          <li className={styles.widgetSmListItem} >
                            <img
                              src= "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                              alt=""
                              className={styles.widgetSmImg}
                            />
                            <div className={styles.widgetSmUser}>
                              <span className={styles.widgetSmUsername}>John</span>
                            </div>
                            <button className={styles.widgetSmButton}>
                              {/*<Visibility className={styles.widgetSmIcon} />*/}
                              Display
                            </button>
                          </li>
                          <li className={styles.widgetSmListItem} >
                            <img
                              src= "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                              alt=""
                              className={styles.widgetSmImg}
                            />
                            <div className={styles.widgetSmUser}>
                              <span className={styles.widgetSmUsername}>John</span>
                            </div>
                            <button className={styles.widgetSmButton}>
                              {/*<Visibility className={styles.widgetSmIcon} />*/}
                              Display
                            </button>
                          </li>
                          <li className={styles.widgetSmListItem} >
                            <img
                              src= "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                              alt=""
                              className={styles.widgetSmImg}
                            />
                            <div className={styles.widgetSmUser}>
                              <span className={styles.widgetSmUsername}>John</span>
                            </div>
                            <button className={styles.widgetSmButton}>
                              {/*<Visibility className={styles.widgetSmIcon} />*/}
                              Display
                            </button>
                          </li>
                          <li className={styles.widgetSmListItem} >
                            <img
                              src= "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                              alt=""
                              className={styles.widgetSmImg}
                            />
                            <div className={styles.widgetSmUser}>
                              <span className={styles.widgetSmUsername}>John</span>
                            </div>
                            <button className={styles.widgetSmButton}>
                              {/*<Visibility className={styles.widgetSmIcon} />*/}
                              Display
                            </button>
                          </li>
                    </ul>
                </div>
                <div className={styles.widgetLg}>
                    <h3 className={styles.widgetLgTitle}>Latest transactions</h3>
                    <table className={styles.widgetLgTable}>
                     <tbody>
                     <tr className={styles.widgetLgTr}>
                        <th className={styles.widgetLgTh}>Customer</th>
                        <th className={styles.widgetLgTh}>Date</th>
                        <th className={styles.widgetLgTh}>Amount</th>
                        <th className={styles.widgetLgTh}>Status</th>
                      </tr>
                      <tr className={styles.widgetLgTr}>
                        <td className={styles.widgetLgUser}>
                          <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className={styles.widgetLgImg}
                          />
                          <span className={styles.widgetLgName}>Susan Carol</span>
                        </td>
                        <td className={styles.widgetLgDate}>2 Jun 2021</td>
                        <td className={styles.widgetLgAmount}>$122.00</td>
                        <td className={styles.widgetLgStatus}>
                            <span className={`${styles.widgetLgButton} ${styles.Approved}`}>Approved</span>
                        </td>
                      </tr>
                      <tr className={styles.widgetLgTr}>
                        <td className={styles.widgetLgUser}>
                          <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className={styles.widgetLgImg}
                          />
                          <span className={styles.widgetLgName}>Susan Carol</span>
                        </td>
                        <td className={styles.widgetLgDate}>2 Jun 2021</td>
                        <td className={styles.widgetLgAmount}>$122.00</td>
                        <td className={styles.widgetLgStatus}>
                            <span className={`${styles.widgetLgButton} ${styles.Declined}`}>Declined</span>
                        </td>
                      </tr>
                      <tr className={styles.widgetLgTr}>
                        <td className={styles.widgetLgUser}>
                          <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className={styles.widgetLgImg}
                          />
                          <span className={styles.widgetLgName}>Susan Carol</span>
                        </td>
                        <td className={styles.widgetLgDate}>2 Jun 2021</td>
                        <td className={styles.widgetLgAmount}>$122.00</td>
                        <td className={styles.widgetLgStatus}>
                            <span className={`${styles.widgetLgButton} ${styles.Pending}`}>Pending</span>
                        </td>
                      </tr>
                      <tr className={styles.widgetLgTr}>
                        <td className={styles.widgetLgUser}>
                          <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className={styles.widgetLgImg}
                          />
                          <span className={styles.widgetLgName}>Susan Carol</span>
                        </td>
                        <td className={styles.widgetLgDate}>2 Jun 2021</td>
                        <td className={styles.widgetLgAmount}>$122.00</td>
                        <td className={styles.widgetLgStatus}>
                            <span className={`${styles.widgetLgButton} ${styles.Approved}`}>Approved</span>
                        </td>
                      </tr>
                     </tbody>
                    </table>
                  </div>
              </div>
            </div>
  )
}

export default AdminOverview