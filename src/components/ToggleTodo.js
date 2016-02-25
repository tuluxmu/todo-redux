import React from 'react'
import classNames from 'classnames'


class ToggleTodo extends React.Component {
  constructor(props) {
    super(props) 
    this.onClick = this.onClick.bind(this)
  }

  onClick(){
    return this.props.onTodoClick(this.props.id)
  }

  render() {
    let textClass = classNames({
      'activated': !this.props.completed,
      'inactivated': this.props.completed
    })

    return (
      <a href='#!'
        className={textClass}
        onClick={this.onClick}
      >
        {this.props.text}
      </a>
    )
  }
}

export default ToggleTodo
