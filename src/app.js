import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { addTodo } from './actions'
import todoApp from './reducers'
import Main from './components/Main'
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import FilterLink from './components/FilterLink'
import FilterList from './components/FilterList'
import AddTodo from './components/AddTodo'

let store = createStore(todoApp)

let _render = () => {
  let state = store.getState()

  render(
    <Main
      todos={state.todos}
      visibilityFilter={state.visibilityFilter.filter}
      dispatch={store.dispatch}
    />,
      document.getElementById('root')
  )
}

store.subscribe(_render)
_render()

