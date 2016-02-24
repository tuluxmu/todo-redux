function visibilityFilter(state = { filter: 'SHOW_ALL' }, action) {
  switch(action.type) {
    case 'SHOW_ALL':
      return Object.assign({}, state, {
      filter: action.type
    })
    case 'SHOW_COMPLETED':
      return Object.assign({}, state, {
      filter: action.type
    })
    case 'SHOW_ACTIVE':
      return Object.assign({}, state, {
      filter: action.type
    })
    default: 
      return state
  }
}

export default visibilityFilter
