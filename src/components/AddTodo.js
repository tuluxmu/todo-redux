import React from 'react'
import { addTodo } from '../actions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.onSubmit = this.props.onSubmit
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
      this.handleSubmit(text)
    }
  }

  handleSubmit(text) {
    this.onSubmit(text)
    this.setState({
      text: ''
    })
  }

  onClick(e) {
    let text = this.state.text.trim()

    if(text) {
      this.handleSubmit(text)
    }
  }

  render() {
    return (
      <section className='TodoInput row'>
        <div className='col s10 m10 l12'>
          <input
            placeholder='add a todo..'
            value={this.state.text}
            onChange={this.onChange}
            onKeyDown={this.handleKeyDown}
            autoFocus
          />
        </div>
        <div className='col s2 m2 valign-wrapper add-button hide-on-large-only'>
          <a 
            className='btn-floating waves-effect waves-light'
            onClick={this.onClick}
          >
            <i className="material-icons">add</i>
          </a>
        </div>
      </section>
    )
  }
}

export default AddTodo

