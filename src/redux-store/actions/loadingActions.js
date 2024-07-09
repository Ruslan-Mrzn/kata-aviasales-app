import types from '../action-types/loadingTypes'

const setIsLoadingState = (payload) => ({ type: types.SET_LOADING_COMPLETED, payload })

export default {
  setIsLoadingState,
}
