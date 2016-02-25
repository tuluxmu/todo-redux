import React from 'react'
import FilterLink from './FilterLink'

class FilterList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className='filterLinks'>
        <div className='nav-wrapper deep-purple'>
          <div className='col s12 center-align'>
            <FilterLink {...this.props} type="Show All"/>
            <FilterLink {...this.props}  type="Active"/>
            <FilterLink {...this.props} type="Completed"/>
          </div>
        </div>
      </nav>
    )
  }
}

export default FilterList
