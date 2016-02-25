import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import todoApp from './reducers'
import Main from './components/Main'

let store = createStore(todoApp)

let _render = () => {
  let state = store.getState()

  render(
    <Main
      todos={state.todos}
      visibilityFilter={state.visibilityFilter}
      dispatch={store.dispatch}
    />,
      document.getElementById('root')
  )
}

store.subscribe(_render)
_render()

