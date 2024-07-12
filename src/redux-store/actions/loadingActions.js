import types from '../action-types/loadingTypes'

const setIsLoadingState = (payload) => ({ type: types.SET_LOADING, payload })

export default {
  setIsLoadingState,
}
