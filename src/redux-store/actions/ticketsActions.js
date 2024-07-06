import types from '../action-types/ticketsTypes'

const getCheapestTickets = (payload) => ({ type: types.GET_CHEAPEST, payload })
const getFastestTickets = (payload) => ({ type: types.GET_FASTEST, payload })
const getOptimalTickets = (payload) => ({ type: types.GET_OPTIMAL, payload })

export default {
  getCheapestTickets,
  getFastestTickets,
  getOptimalTickets,
}
