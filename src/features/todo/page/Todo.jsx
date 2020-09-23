import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../template/AddTodo';
import TodosContainer from '../template/TodosContainer';

const Todo = ({ todos }) => {
  console.log(todos);
  return (
    <div>
      <AddTodo />
      <TodosContainer />
    </div>
  );
};

function select(state) {
  return {
    todos: state.todos,
  };
}
export default connect(select)(Todo);
