import { combineReducers } from 'redux';

import todos from '../features/todo/utils/reducer';
const rootReducer = combineReducers({
  todos: todos,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
