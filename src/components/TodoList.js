import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let todos = this.props.todos.filter(todo => {
      switch(this.props.filter) {
        case 'SHOW_COMPLETED':
          return todo.completed
        case 'SHOW_ACTIVE':
          return !todo.completed
        default:
          return todo
      }
    }).map(todo => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onTodoClick={this.props.onTodoClick}
          removeTodo={this.props.removeTodo}
        />
      )
    })
    return (
      <ul className='collection hoverable'>
        {todos}
      </ul>
    )
  }
}


export default TodoList
