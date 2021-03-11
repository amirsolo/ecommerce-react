import { createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './rootReducer'

const enhancedComposer = composeWithDevTools({ trace: true })

const middlewares = []

const store = createStore(
  rootReducer,
  enhancedComposer(applyMiddleware(...middlewares))
)

export default store
