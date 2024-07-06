import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { filtersSelectors } from '../../redux-store/selectors/index.js'
import filterActions from '../../redux-store/actions/flightActions'

import styles from './FlightFilter.module.scss'

const FlightFilter = () => {
  const storeFilters = useSelector(filtersSelectors.filters)
  const [filters, setFilters] = useState(storeFilters)
  const dispatch = useDispatch()

  useEffect(() => {
    setFilters(storeFilters)
  }, [storeFilters])

  const { all, withoutTransfer, oneTransfer, twoTransfers, threeTransfers } = filters
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Количество пересадок</h2>
      <div className={styles.filtersContainer}></div>
      <label className={styles.label}>
        <input
          type="checkbox"
          onChange={() => dispatch(filterActions.toggleAll())}
          className={styles.input}
          checked={all}
        />
        <span className={styles.decor}></span>
        <span className={styles.text}>Все</span>
      </label>

      <ul className={styles.filters}>
        <li className={styles.filter}>
          <label className={styles.label}>
            <input
              type="checkbox"
              onChange={() => dispatch(filterActions.toggleWithoutTransfer())}
              className={styles.input}
              checked={withoutTransfer}
            />
            <span className={styles.decor}></span>
            <span className={styles.text}>Без пересадок</span>
          </label>
        </li>
        <li className={styles.filter}>
          <label className={styles.label}>
            <input
              type="checkbox"
              onChange={() => dispatch(filterActions.toggleOneTransfer())}
              className={styles.input}
              checked={oneTransfer}
            />
            <span className={styles.decor}></span>
            <span className={styles.text}>1 пересадка</span>
          </label>
        </li>
        <li className={styles.filter}>
          <label className={styles.label}>
            <input
              type="checkbox"
              onChange={() => dispatch(filterActions.toggleTwoTransfers())}
              className={styles.input}
              checked={twoTransfers}
            />
            <span className={styles.decor}></span>
            <span className={styles.text}>2 пересадки</span>
          </label>
        </li>
        <li className={styles.filter}>
          <label className={styles.label}>
            <input
              type="checkbox"
              onChange={() => dispatch(filterActions.toggleThreeTransfers())}
              className={styles.input}
              checked={threeTransfers}
            />
            <span className={styles.decor}></span>
            <span className={styles.text}>3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  )
}

export default FlightFilter
