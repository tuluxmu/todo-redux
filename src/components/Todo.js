import React from 'react'
import ToggleTodo from './ToggleTodo'
import RemoveTodo from './RemoveTodo'

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className='collection-item'>
        <div>
          <ToggleTodo {...this.props} />
          <RemoveTodo {...this.props} />
        </div>
      </li>
    )
  }
}

export default Todo
