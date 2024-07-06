import types from '../action-types/flightTypes'

const toggleAll = () => ({ type: types.TOGGLE_ALL_TRANSFER_VARIANTS })
const toggleWithoutTransfer = () => ({ type: types.TOGGLE_WITHOUT_TRANSFER })
const toggleOneTransfer = () => ({ type: types.TOGGLE_ONE_TRANSFER })
const toggleTwoTransfers = () => ({ type: types.TOGGLE_TWO_TRANSFERS })
const toggleThreeTransfers = () => ({ type: types.TOGGLE_THREE_TRANSFERS })

export default {
  toggleAll,
  toggleWithoutTransfer,
  toggleOneTransfer,
  toggleTwoTransfers,
  toggleThreeTransfers,
}
