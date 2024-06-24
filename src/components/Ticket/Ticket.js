import React from 'react'

import styles from './Ticket.module.scss'

const Ticket = () => {
  return (
    <li className={styles.ticket}>
      <div className={styles.header}>
        <span className={styles.price}>13 400 Р </span>
        <img width={100} height={40} />
      </div>
      <div className={styles.table}>
        <div className={styles.forward}>
          <div className={styles.block}>
            <span className={styles.title}>MOW – HKT</span>
            <span className={styles.value}>10:45 – 08:00</span>
          </div>
          <div className={styles.block}>
            <span className={styles.title}>В пути</span>
            <span className={styles.value}>21ч 15м</span>
          </div>
          <div className={styles.block}>
            <span className={styles.title}>2 пересадки</span>
            <span className={styles.value}>HKG, JNB</span>
          </div>
        </div>
        <div className={styles.back}>
          <div className={styles.block}>
            <span className={styles.title}>MOW – HKT</span>
            <span className={styles.value}>10:45 – 08:00</span>
          </div>
          <div className={styles.block}>
            <span className={styles.title}>В пути</span>
            <span className={styles.value}>21ч 15м</span>
          </div>
          <div className={styles.block}>
            <span className={styles.title}>2 пересадки</span>
            <span className={styles.value}>HKG, JNB</span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Ticket
