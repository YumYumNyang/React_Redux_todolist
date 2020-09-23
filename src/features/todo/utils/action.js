export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CHANGE_TODO = 'CHANGE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const changeTodo = (input, id) => ({
  type: CHANGE_TODO,
  payload: { input, id },
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: { id },
});
