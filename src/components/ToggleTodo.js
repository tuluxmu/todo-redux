import React from 'react'
import classNames from 'classnames'


class ToggleTodo extends React.Component {
  constructor(props) {
    super(props) 
    this.onClick = this.onClick.bind(this)
  }

  onClick(e){
    return this.props.onTodoClick(this.props.id)
  }

  render() {
    let textClass = classNames({
      'activated': !this.props.completed,
      'inactivated': this.props.completed
    })
    let checked = this.props.completed
    let id = 'todo-' + this.props.id

    return (
      <a href='#'
      >
        <input 
          type='checkbox' 
          id={id}
          checked={checked}
        />
        <label 
          className={textClass}
          htmlFor={id} 
          onClick={this.onClick}
        >
          {this.props.text}
        </label> 
      </a>
    )
  }
}

export default ToggleTodo
