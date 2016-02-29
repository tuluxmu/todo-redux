import React from 'react'
import classNames from 'classnames'

class FilterLink extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.filter = this.props.onFilterClick
  }

  onClick(e) {
    switch(this.props.type) {
      case 'Show All':
        return this.filter('SHOW_ALL', true)
      case 'Active':
        return this.filter('SHOW_ACTIVE', true)
      case 'Completed':
        return this.filter('SHOW_COMPLETED', true)
      default:
        return this.filter('SHOW_ALL', true)
    }
  }

  render() {
    return (
      <li className='tab col s3'>
        <a href='#' 
          onClick={this.onClick}
        >
          {this.props.type}
        </a>
      </li>
    )
  }
}

export default FilterLink
