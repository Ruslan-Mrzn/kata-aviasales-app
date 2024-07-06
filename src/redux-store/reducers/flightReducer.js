import types from '../action-types/flightTypes'
const defaultState = {
  all: false,
  withoutTransfer: true,
  oneTransfer: false,
  twoTransfers: false,
  threeTransfers: false,
}

export const flightReducer = (state = defaultState, action) => {
  if (action.type === types.TOGGLE_ALL_TRANSFER_VARIANTS) {
    const { all } = state
    return {
      all: !all,
      withoutTransfer: !all,
      oneTransfer: !all,
      twoTransfers: !all,
      threeTransfers: !all,
    }
  }

  if (action.type === types.TOGGLE_WITHOUT_TRANSFER) {
    const { all, withoutTransfer, oneTransfer, twoTransfers, threeTransfers } = state
    if (!all && !withoutTransfer && oneTransfer && twoTransfers && threeTransfers) {
      return { ...state, all: !all, withoutTransfer: !withoutTransfer }
    }
    if (all && withoutTransfer && oneTransfer && twoTransfers && threeTransfers) {
      return { ...state, all: !all, withoutTransfer: !withoutTransfer }
    }
    return { ...state, withoutTransfer: !withoutTransfer }
  }

  if (action.type === types.TOGGLE_ONE_TRANSFER) {
    const { all, withoutTransfer, oneTransfer, twoTransfers, threeTransfers } = state
    if (!all && withoutTransfer && !oneTransfer && twoTransfers && threeTransfers) {
      return { ...state, all: !all, oneTransfer: !oneTransfer }
    }
    if (all && withoutTransfer && oneTransfer && twoTransfers && threeTransfers) {
      return { ...state, all: !all, oneTransfer: !oneTransfer }
    }
    return { ...state, oneTransfer: !oneTransfer }
  }

  if (action.type === types.TOGGLE_TWO_TRANSFERS) {
    const { all, withoutTransfer, oneTransfer, twoTransfers, threeTransfers } = state
    if (!all && withoutTransfer && oneTransfer && !twoTransfers && threeTransfers) {
      return { ...state, all: !all, twoTransfers: !twoTransfers }
    }
    if (all && withoutTransfer && oneTransfer && twoTransfers && threeTransfers) {
      return { ...state, all: !all, twoTransfers: !twoTransfers }
    }
    return { ...state, twoTransfers: !twoTransfers }
  }

  if (action.type === types.TOGGLE_THREE_TRANSFERS) {
    const { all, withoutTransfer, oneTransfer, twoTransfers, threeTransfers } = state
    if (!all && withoutTransfer && oneTransfer && twoTransfers && !threeTransfers) {
      return { ...state, all: !all, threeTransfers: !threeTransfers }
    }
    if (all && withoutTransfer && oneTransfer && twoTransfers && threeTransfers) {
      return { ...state, all: !all, threeTransfers: !threeTransfers }
    }
    return { ...state, threeTransfers: !threeTransfers }
  }

  return state
}
