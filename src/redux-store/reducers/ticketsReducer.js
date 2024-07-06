import data from '../mockTicketsData'
import types from '../action-types/ticketsTypes'

let id = 0

const dataWhitIds = data.map((ticket) => ({ ...ticket, id: id++ }))

const defaultState = [...dataWhitIds].sort((a, b) => a.price - b.price)

export const ticketsReducer = (state = defaultState, action) => {
  if (action.type === types.GET_CHEAPEST) {
    return [...state].sort((a, b) => a.price - b.price)
  }
  if (action.type === types.GET_FASTEST) {
    return [...state].sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - b.segments[0].duration - b.segments[1].duration
    )
  }
  return state
}
