import React, { useState } from 'react';

function TodoItem({ todo, onToggle, onRemove, onEdit }) {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(todo.content);
  console.log(todo);
  function handleEditMode(text) {
    if (isEdit) {
      onEdit(text);
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  }
  if (isEdit) {
    return (
      <div>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button
          type="submit"
          onClick={() => {
            onEdit(text, todo.id);
            setIsEdit(!isEdit);
          }}
        >
          완료
        </button>
      </div>
    );
  } else {
    return (
      <li
        style={{
          textDecoration: todo.done ? 'line-through' : 'none',
        }}
        onClick={() => onToggle(todo.id)}
      >
        <span>{text}</span>
        <button onClick={() => handleEditMode(text)}>수정</button>
        <button onClick={() => onRemove(todo.id)}>삭제</button>
      </li>
    );
  }
}

const Todos = ({ todos, onToggle, onRemove, onEdit }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default Todos;
