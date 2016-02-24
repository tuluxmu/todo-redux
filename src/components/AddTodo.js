import React from 'react'
import { addTodo } from '../actions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.dispatch = this.props.dispatch
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleKeyDown(e) {
    let pressed = e.which
    let text = this.state.text.trim()

    if(pressed === 13) {
      this.handleSubmit(addTodo(text))
    }
  }

  handleSubmit(action) {
    this.dispatch(action) 
    this.setState({
      text: ''
    })
  }

  onClick(e) {
    let text = this.state.text.trim()

    if(text) {
      this.handleSubmit(addTodo(text))
    }
  }

  render() {
    return (
      <section className='TodoInput'>
        <input
          placeholder='add a todo..'
          value={this.state.text}
          onChange={this.onChange}
          onKeyDown={this.handleKeyDown}
          autoFocus
        />
        <button 
          onClick={this.onClick}
        >add</button>
      </section>
    )
  }
}

export default AddTodo

