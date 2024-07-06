import React from 'react'
import { useDispatch } from 'react-redux'

import ticketsActions from '../../redux-store/actions/ticketsActions'

import styles from './PriceFilter.module.scss'

const PriceFilter = () => {
  const dispatch = useDispatch()
  return (
    <fieldset className={styles.container}>
      <label className={styles.label}>
        <input
          name="tickets"
          type="radio"
          onChange={() => dispatch(ticketsActions.getCheapestTickets())}
          defaultChecked
          className={styles.input}
        />
        <span className={styles.text}>Самый дешевый</span>
      </label>
      <label className={styles.label}>
        <input
          name="tickets"
          type="radio"
          onChange={() => dispatch(ticketsActions.getFastestTickets())}
          className={styles.input}
        />
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
