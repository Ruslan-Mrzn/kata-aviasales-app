import React from 'react'

import FlightInfo from '../FlightInfo/FlightInfo'

import styles from './Ticket.module.scss'

const Ticket = ({ price, carrier, segments }) => {
  return (
    <li className={styles.ticket}>
      <div className={styles.header}>
        <span className={styles.price}>{`${price.toLocaleString('ru-RU')} Р `}</span>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} />
      </div>
      <div className={styles.table}>
        <FlightInfo segment={segments[0]} />
        <FlightInfo segment={segments[1]} />
      </div>
    </li>
  )
}

export default Ticket
