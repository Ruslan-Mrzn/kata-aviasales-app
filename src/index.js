import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'

import { flightReducer } from './redux-store/reducers/flightReducer'
import { ticketsReducer } from './redux-store/reducers/ticketsReducer'
import { loadingReducer } from './redux-store/reducers/loadingReducer'
import App from './components/App/App'

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  flights: flightReducer,
  loading: loadingReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
