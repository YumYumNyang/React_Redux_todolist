import { ADD_TODO, REMOVE_TODO, CHANGE_TODO, TOGGLE_TODO } from './action';

const initialState = {
  input: '',
  todos: [],
};

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({ ...action.payload, done: false }),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? {
                ...todo,
                done: !todo.done,
              }
            : todo
        ),
      };

    case CHANGE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? {
                ...todo,
                content: action.payload.input,
              }
            : todo
        ),
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      };

    default:
      return state;
  }
}

export default todos;
