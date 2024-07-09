import api from '../../utils/api'
import ticketsActions from '../actions/ticketsActions'
import loadingActions from '../actions/loadingActions'

const fetchTickets = (searchId) => {
  return async (dispatch) => {
    const { tickets, stop } = await api.getTickets(searchId)
    dispatch(ticketsActions.addTickets(tickets))
    dispatch(loadingActions.setIsLoadingState(stop))
  }
}

export default fetchTickets
