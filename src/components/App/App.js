import React from 'react'

import Logo from '../Logo/Logo.js'
import FlightFilter from '../FlightFilter/FlightFilter.js'
import PriceTabs from '../TicketsFilter/TicketsFilter.js'
import Ticket from '../Ticket/Ticket.js'

import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <Logo />
      <div className={styles.main}>
        <FlightFilter />
        <div className={styles.tickets}>
          <PriceTabs />
          <ul className={styles.ticketsList}>
            <Ticket />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
