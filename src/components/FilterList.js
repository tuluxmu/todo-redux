import React from 'react'
import FilterLink from './FilterLink'

class FilterList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='row'>
        <div className='col s12'>
          <ul className='tabs purple lighten-5'>
            <FilterLink {...this.props} type="Show All"/>
            <FilterLink {...this.props}  type="Active"/>
            <FilterLink {...this.props} type="Completed"/>
          </ul>
        </div>
      </div>
    )
  }
}

export default FilterList
