function visibilityFilter(state = { filter: 'SHOW_ALL', active: true }, action) {
  switch(action.type) {
    case 'SHOW_ALL':
      return {
      filter: action.type,
      active: action.active
    }
    case 'SHOW_COMPLETED':
      return {
      filter: action.type,
      active: action.active
    }
    case 'SHOW_ACTIVE':
      return {
      filter: action.type,
      active: action.active
    }
    default: 
      return state
  }
}

export default visibilityFilter
