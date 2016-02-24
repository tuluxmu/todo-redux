import React from 'react'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    return this.props.onTodoClick(this.props.id)
  }

  render() {
    let completed = this.props.completed ? 'inactivated' : 'activated'

    return (
      <li
        completed={this.props.completed}
        className={completed}
        onClick={this.onClick}>
        {this.props.text}
      </li>
    )
  }
}

export default Todo
