import React from 'react'
import { filter } from '../actions'

class FilterLink extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    return this.props.onFilterClick(this.props.filter)
  }

  render() {
    return (
      <span>
        <a href='#' 
          onClick={this.onClick}
        >{this.props.type}</a>
      </span>
    )
  }
}

export default FilterLink
