import React from 'react'

import styles from './FlightFilter.module.scss'

const FlightFilter = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Количество пересадок</h2>
      <div className={styles.filtersContainer}></div>
      <label className={styles.label}>
        <input type="checkbox" className={styles.input} />
        <span className={styles.decor}></span>
        <span className={styles.text}>Все</span>
      </label>

      <ul className={styles.filters}>
        <li className={styles.filter}>
          <label className={styles.label}>
            <input type="checkbox" className={styles.input} />
            <span className={styles.decor}></span>
            <span className={styles.text}>Без пересадок</span>
          </label>
        </li>
        <li className={styles.filter}>
          <label className={styles.label}>
            <input type="checkbox" className={styles.input} />
            <span className={styles.decor}></span>
            <span className={styles.text}>1 пересадка</span>
          </label>
        </li>
        <li className={styles.filter}>
          <label className={styles.label}>
            <input type="checkbox" className={styles.input} />
            <span className={styles.decor}></span>
            <span className={styles.text}>2 пересадки</span>
          </label>
        </li>
        <li className={styles.filter}>
          <label className={styles.label}>
            <input type="checkbox" className={styles.input} />
            <span className={styles.decor}></span>
            <span className={styles.text}>3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  )
}

export default FlightFilter
