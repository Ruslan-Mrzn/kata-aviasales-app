import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ticketsActions from '../../redux-store/actions/ticketsActions'
import { ticketsSelectors } from '../../redux-store/selectors/index.js'
import WorkerBuilder from '../../utils/workerBuilder.js'
import sortingWebWorker from '../../web-workers/sortingWebWorker.js'

import styles from './PriceFilter.module.scss'

const PriceFilter = () => {
  const tickets = useSelector(ticketsSelectors.allTickets)
  const dispatch = useDispatch()
  const sortingWorker = new WorkerBuilder(sortingWebWorker)

  sortingWorker.onmessage = (event) => {
    console.log('hi from worker')
    console.log(event.data.slice(0, 5))
    dispatch(ticketsActions.setTickets(event.data))
  }

  return (
    <fieldset className={styles.container}>
      <label className={styles.label}>
        <input
          name="tickets"
          type="radio"
          onChange={() => {
            //sortingWebWorker.terminate()
            sortingWorker.postMessage({ type: 'cheapest', data: tickets })
          }}
          defaultChecked
          className={styles.input}
        />
        <span className={styles.text}>Самый дешевый</span>
      </label>
      <label className={styles.label}>
        <input
          name="tickets"
          type="radio"
          onChange={() => {
            //sortingWebWorker.terminate()
            sortingWorker.postMessage({ type: 'fastest', data: tickets })
          }}
          className={styles.input}
        />
        <span className={styles.text}>Самый быстрый</span>
      </label>
      <label className={styles.label}>
        <input
          name="tickets"
          type="radio"
          className={styles.input}
          onChange={() => {
            //sortingWebWorker.terminate()
            sortingWorker.postMessage({ type: 'optimal', data: tickets })
          }}
        />
        <span className={styles.text}>Оптимальный</span>
      </label>
    </fieldset>
  )
}

export default PriceFilter
