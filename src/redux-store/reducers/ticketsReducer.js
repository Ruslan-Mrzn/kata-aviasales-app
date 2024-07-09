import types from '../action-types/ticketsTypes'

let id = 0

export const ticketsReducer = (state = [], action) => {
  if (action.type === types.GET_CHEAPEST) {
    return [...state].sort((a, b) => a.price - b.price)
  }
  if (action.type === types.GET_FASTEST) {
    return [...state].sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - b.segments[0].duration - b.segments[1].duration
    )
  }

  if (action.type === types.ADD_TICKETS) {
    return [...state, ...action.payload.map((ticket) => ({ ...ticket, id: id++ }))].sort((a, b) => a.price - b.price)
  }
  return state
}
