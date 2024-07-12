import types from '../action-types/loadingTypes'

const defaultSate = true

export const loadingReducer = (state = defaultSate, action) => {
  if (action.type === types.SET_LOADING) {
    return action.payload
  }
  return state
}
