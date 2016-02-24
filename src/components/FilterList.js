import React from 'react'
import FilterLink from './FilterLink'

class FilterList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='filterLinks'>
        <FilterLink {...this.props} filter='SHOW_ALL' type='Show All' />
        {' | '}
        <FilterLink {...this.props} filter='SHOW_ACTIVE' type='Active' />
        {' | '}
        <FilterLink {...this.props} filter='SHOW_COMPLETED' type='Completed' />
      </section>
    )
  }
}

export default FilterList
