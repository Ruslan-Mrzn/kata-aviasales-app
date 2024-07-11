import types from '../action-types/ticketsTypes'

let id = 0

export const ticketsReducer = (state = [], action) => {
  if (action.type === types.SET_TICKETS) {
    return [...action.payload]
  }

  if (action.type === types.ADD_TICKETS) {
    return [...state, ...action.payload.map((ticket) => ({ ...ticket, id: id++ }))].sort((a, b) => a.price - b.price)
  }
  return state
}
