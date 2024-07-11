import types from '../action-types/ticketsTypes'

const setTickets = (payload) => ({ type: types.SET_TICKETS, payload })
const addTickets = (payload) => ({ type: types.ADD_TICKETS, payload })

export default {
  setTickets,
  addTickets,
}
