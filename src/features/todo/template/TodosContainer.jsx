import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from './Todos';
import { removeTodo, toggleTodo, changeTodo } from '../utils/action';
/*
function TodoList({ props }) {
  const { todos} = props;

  return <Todos todos={todos} onToggle={handleToggle} onRemove={handleRemove} />;
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};
const mapDispatchToProps = dispatch => ({
  handleToggle: id => dispatch(toggleTodo(id)),
  handleRemove: id => dispatch(removeTodo(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
*/

function TodosContainer() {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  const onToggle = id => dispatch(toggleTodo(id));
  const onRemove = id => dispatch(removeTodo(id));
  const onEdit = (text, id) => dispatch(changeTodo(text, id));

  return <Todos todos={todos} onToggle={onToggle} onRemove={onRemove} onEdit={onEdit} />;
}

export default TodosContainer;
