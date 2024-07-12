import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ticketsActions from '../../redux-store/actions/ticketsActions'
import { ticketsSelectors, loadingSelectors } from '../../redux-store/selectors/index.js'
import WorkerBuilder from '../../utils/workerBuilder.js'
import sortingWebWorker from '../../web-workers/sortingWebWorker.js'

import styles from './PriceFilter.module.scss'

const PriceFilter = () => {
  const tickets = useSelector(ticketsSelectors.allTickets)
  const dispatch = useDispatch()
  const sortingWorker = new WorkerBuilder(sortingWebWorker)

  const isLoading = useSelector(loadingSelectors.isLoading)

  sortingWorker.onmessage = (event) => {
    dispatch(ticketsActions.setTickets(event.data))
  }

  return (
    <fieldset className={styles.container}>
      <label className={styles.label}>
        <input
          name="tickets"
          type="radio"
          onChange={() => {
            sortingWorker.postMessage({ type: 'cheapest', data: tickets })
          }}
          defaultChecked
          disabled={isLoading}
          className={styles.input}
        />
        <span className={styles.text}>Самый дешевый</span>
      </label>
      <label className={styles.label}>
        <input
          name="tickets"
          type="radio"
          disabled={isLoading}
          onChange={() => {
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
          disabled={isLoading}
          className={styles.input}
          onChange={() => {
            sortingWorker.postMessage({ type: 'optimal', data: tickets })
          }}
        />
        <span className={styles.text}>Оптимальный</span>
      </label>
    </fieldset>
  )
}

export default PriceFilter
