import React from 'react'

class RemoveTodo extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    return this.props.removeTodo(this.props.id)
  }


  render() {
    return (
      <a 
        href='#!'
        className="secondary-content"
        onClick={this.onClick}
      >
        <i className="material-icons">close</i>
      </a>
    )
  }
}

export default RemoveTodo

