import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import FilterList from './FilterList'
import { completeTodo, filter } from '../actions'

class Main extends React.Component {
  constructor(props) {
    super(props) 
    this.dispatch = this.props.dispatch
    this.onTodoClick = this.onTodoClick.bind(this)
    this.onFilterClick = this.onFilterClick.bind(this)  
  }

  onTodoClick(id) {
    return this.dispatch(completeTodo(id))
  }

  onFilterClick(filterType) {
    return this.dispatch(filter(filterType))
  }

  render() {
    let todos = this.props.todos
    let filter = this.props.visibilityFilter
    let dispatch = this.props.dispatch

    return (
      <section className='main'>
        <AddTodo dispatch={dispatch} />
        <TodoList
          todos={todos}
          filter={filter}
          onTodoClick={this.onTodoClick} />
        <FilterList onFilterClick={this.onFilterClick} />
      </section>
    )
  }
}

export default Main
