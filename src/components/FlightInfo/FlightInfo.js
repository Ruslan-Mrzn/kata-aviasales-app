import React from 'react'
import { lightFormat, getTime, minutesToMilliseconds } from 'date-fns'

import styles from './FlightInfo.module.scss'

const FlightInfo = ({ segment }) => {
  const segmentTimeDeparture = lightFormat(segment.date, 'HH:mm')
  const segmentFlightTime = `${Math.floor(segment.duration / 60)}ч ${segment.duration % 60}м`
  const segmentTimeArrival = lightFormat(getTime(segment.date) + minutesToMilliseconds(segment.duration), 'HH:mm')
  const segmentTransfersCount = segment.stops.length
  return (
    <div className={styles.segment}>
      <div className={styles.block}>
        <span className={styles.title}>{`${segment.origin} - ${segment.destination}`}</span>
        <span className={styles.value}>{`${segmentTimeDeparture} - ${segmentTimeArrival}`}</span>
      </div>
      <div className={styles.block}>
        <span className={styles.title}>В пути</span>
        <span className={styles.value}>{segmentFlightTime}</span>
      </div>
      <div className={styles.block}>
        <span className={styles.title}>
          {segmentTransfersCount
            ? `${segmentTransfersCount} пересадк${segmentTransfersCount > 1 ? 'и' : 'а'}`
            : 'без пересадок'}
        </span>
        <span className={styles.value}>{segment.stops.length ? segment.stops.join(', ') : '-'}</span>
      </div>
    </div>
  )
}

export default FlightInfo
