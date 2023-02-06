import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import phoneReducer from './phone/reducerPhone'
import tvReducer from './tv/reducerTv'
import commentReducer from './comments/reducerComments'

const rootReducer = combineReducers({
  phone: phoneReducer,
  television: tvReducer,
  comments: commentReducer,
})

// Solution 1
/* const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
) */

// Solution 2
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store