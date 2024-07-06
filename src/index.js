import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'

import { flightReducer } from './redux-store/reducers/flightReducer'
import { ticketsReducer } from './redux-store/reducers/ticketsReducer'
import App from './components/App/App'

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  flights: flightReducer,
})

const store = createStore(rootReducer, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
