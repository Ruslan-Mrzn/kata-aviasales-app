import React from 'react'

import styles from './TicketsFilter.module.scss'

const PriceFilter = () => {
  return (
    <fieldset className={styles.container}>
      <label className={styles.label}>
        <input name="tickets" type="radio" defaultChecked className={styles.input} />
        <span className={styles.text}>Самый дешевый</span>
      </label>
      <label className={styles.label}>
        <input name="tickets" type="radio" className={styles.input} />
        <span className={styles.text}>Самый быстрый</span>
      </label>
      <label className={styles.label}>
        <input name="tickets" type="radio" className={styles.input} />
        <span className={styles.text}>Оптимальный</span>
      </label>
    </fieldset>
  )
}

export default PriceFilter
