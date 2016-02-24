import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import todos from './todos'

let todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
