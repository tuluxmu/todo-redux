let nextTodoId = 0

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    completed: false,
    text
  }
}

export const completeTodo = (id) => {
  return {
    type: 'COMPLETE_TODO',
    id
  }
}

export const filter = (filter, active) => {
  return {
    type: filter,
    active
  }
}

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

