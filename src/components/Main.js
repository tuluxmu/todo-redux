import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import FilterList from './FilterList'
import { removeTodo, addTodo, completeTodo, filter } from '../actions'

class Main extends React.Component {
  constructor(props) {
    super(props) 
    this.dispatch = this.props.dispatch
    this.onSubmit = this.onSubmit.bind(this)
    this.onTodoClick = this.onTodoClick.bind(this)
    this.onFilterClick = this.onFilterClick.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  onTodoClick(id) {
    return this.dispatch(completeTodo(id))
  }

  onFilterClick(filterType, active) {
    return this.dispatch(filter(filterType))
  }

  onSubmit(text) {
    return this.dispatch(addTodo(text))
  }

  removeTodo(id) {
    return this.dispatch(removeTodo(id))
  }

  render() {
    let todos = this.props.todos
    let filter = this.props.visibilityFilter.filter

    return (
      <section className='main'>
        <AddTodo
          onSubmit={this.onSubmit}
        />
        <TodoList
          todos={todos}
          filter={filter}
          onTodoClick={this.onTodoClick} 
          removeTodo={this.removeTodo}
        />
        <FilterList 
          filter={filter}
          onFilterClick={this.onFilterClick} />
      </section>
    )
  }
}

export default Main
