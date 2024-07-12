import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Spin, Button } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import { ticketsSelectors, filtersSelectors, loadingSelectors } from '../../redux-store/selectors/index.js'
import ticketsActions from '../../redux-store/actions/ticketsActions.js'
import loadingActions from '../../redux-store/actions/loadingActions.js'
import Logo from '../Logo/Logo.js'
import FlightFilter from '../FlightFilter/FlightFilter.js'
import PriceTabs from '../PriceFilter/PriceFilter.js'
import Ticket from '../Ticket/Ticket.js'
import api from '../../utils/api.js'

import styles from './App.module.scss'

const App = () => {
  const [ticketsForRenderCount, setTicketsForRenderCount] = useState(5)
  let tickets = []
  const { all, withoutTransfer, oneTransfer, twoTransfers, threeTransfers } = useSelector(filtersSelectors.filters)
  if (all) tickets = useSelector(ticketsSelectors.allTickets)
  if (!all && !withoutTransfer && oneTransfer && twoTransfers && threeTransfers)
    tickets = useSelector(ticketsSelectors.withOneTransferAndWithTwoTransferAndWithTreeTransfer)
  if (!all && !oneTransfer && withoutTransfer && twoTransfers && threeTransfers)
    tickets = useSelector(ticketsSelectors.withoutTransferAndWithTwoTransferAndWithTreeTransfer)
  if (!all && oneTransfer && withoutTransfer && !twoTransfers && threeTransfers)
    tickets = useSelector(ticketsSelectors.withoutTransferAndWithOneTransferAndWithTreeTransfer)
  if (!all && oneTransfer && withoutTransfer && twoTransfers && !threeTransfers)
    tickets = useSelector(ticketsSelectors.withoutTransferAndWithOneTransferAndWithTwoTransfer)
  if (!all && withoutTransfer && oneTransfer && !twoTransfers && !threeTransfers)
    tickets = useSelector(ticketsSelectors.withoutTransferAndWithOneTransfer)
  if (!all && withoutTransfer && !oneTransfer && twoTransfers && !threeTransfers)
    tickets = useSelector(ticketsSelectors.withoutTransferAndWithTwoTransfer)
  if (!all && withoutTransfer && !oneTransfer && !twoTransfers && threeTransfers)
    tickets = useSelector(ticketsSelectors.withoutTransferAndWithThreeTransfer)
  if (!all && !withoutTransfer && oneTransfer && twoTransfers && !threeTransfers)
    tickets = useSelector(ticketsSelectors.withOneTransferAndWithTwoTransfer)
  if (!all && !withoutTransfer && oneTransfer && !twoTransfers && threeTransfers)
    tickets = useSelector(ticketsSelectors.withOneTransferAndWithThreeTransfer)
  if (!all && !withoutTransfer && !oneTransfer && twoTransfers && threeTransfers)
    tickets = useSelector(ticketsSelectors.withTwoTransferAndWithThreeTransfer)
  if (!all && withoutTransfer && !oneTransfer && !twoTransfers && !threeTransfers)
    tickets = useSelector(ticketsSelectors.withoutTransfer)
  if (!all && !withoutTransfer && oneTransfer && !twoTransfers && !threeTransfers)
    tickets = useSelector(ticketsSelectors.withOneTransfer)
  if (!all && !withoutTransfer && !oneTransfer && twoTransfers && !threeTransfers)
    tickets = useSelector(ticketsSelectors.withTwoTransfer)
  if (!all && !withoutTransfer && !oneTransfer && !twoTransfers && threeTransfers)
    tickets = useSelector(ticketsSelectors.withThreeTransfer)
  if (!all && !withoutTransfer && !oneTransfer && !twoTransfers && !threeTransfers)
    tickets = useSelector(ticketsSelectors.noneTickets)

  const dispatch = useDispatch()

  const getChunk = async (searchId) => {
    try {
      const { tickets, stop } = await api.getTickets(searchId)
      dispatch(ticketsActions.addTickets(tickets))
      if (!stop) await getChunk(searchId)
    } catch {
      await getChunk(searchId)
    } finally {
      dispatch(loadingActions.setIsLoadingState(false))
    }
  }

  const getTicketsData = async () => {
    const { searchId } = await api.getSearchId()
    await getChunk(searchId)
  }

  const isLoading = useSelector(loadingSelectors.isLoading)

  useEffect(() => {
    try {
      getTicketsData()
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <div className={styles.app}>
      <Logo />
      {isLoading && (
        <div>
          <Spin indicator={<LoadingOutlined spin />} />
          Loading tickets
        </div>
      )}
      <div className={styles.main}>
        <FlightFilter />
        <div className={styles.tickets}>
          <PriceTabs />
          <ul className={styles.ticketsList}>
            {tickets.length !== 0 ? (
              tickets
                .map(({ id, price, carrier, segments }) => (
                  <Ticket key={id} price={price} carrier={carrier} segments={segments} />
                ))
                .slice(0, ticketsForRenderCount)
            ) : (
              <Alert type="info" message={'Рейсов, подходящих под заданные фильтры, не найдено'} />
            )}
            {tickets.length !== 0 && (
              <Button
                onClick={() => {
                  setTicketsForRenderCount(ticketsForRenderCount + 5)
                }}
                type="primary"
              >
                Показать ещё
              </Button>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
