import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const {
    todos, handleChangeProps, deleteTodoProps, updateItem,
  } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          // @ts-ignore
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          updateItem={updateItem}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
};

export default TodoList;
