import { createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
import myreducer from './reducer'

const store = createStore(myreducer);

export default store