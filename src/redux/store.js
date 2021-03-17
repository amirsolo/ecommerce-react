import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { persistStore } from 'redux-persist'

import rootReducer from './rootReducer'

const enhancedComposer = composeWithDevTools({ trace: true })

const middlewares = []

const store = createStore(
  rootReducer,
  enhancedComposer(applyMiddleware(...middlewares))
)

const persistor = persistStore(store)

export { store, persistor }
