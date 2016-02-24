
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO': 
      return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: action.completed
      }
    ]
    case 'COMPLETE_TODO':
      return state.map(todo => {
      if(todo.id === action.id) {
        return {
          id: todo.id,
          completed: !todo.completed,
          text: todo.text
        }
      } else {
        return todo
      }
    })
    default: 
      return state
  }
}

export default todos
