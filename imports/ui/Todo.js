import React from 'react';

export default Todo = ({_id, todo, done, deleteTodo, completeTodo}) => {
  let lineThrough = done ? 'line-through' : 'none';
  const list = {
    listStyle: 'none',
    display: 'inline-block',
    marginRight: '10px',
    cursor: 'pointer',
    marginTop: '10px',
    textDecoration: lineThrough
  }
  return (
    <div>
      <li style={list} onClick={() => completeTodo(_id, done)}>
        {todo}
      </li>
      <button onClick={() => deleteTodo(_id)}>Delete</button>
    </div>
  )
}