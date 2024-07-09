import types from '../action-types/loadingTypes'

const defaultSate = {
  isLoading: true,
  isLoaded: false,
  isFailed: false,
}

export const loadingReducer = (state = defaultSate, action) => {
  if (action.type === types.SET_LOADING_COMPLETED) {
    return { ...state, isLoaded: action.payload }
  }
  return state
}
