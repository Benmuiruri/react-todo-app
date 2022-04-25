import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    return (
      <ul>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={props.handleChangeProps}
            deleteTodoProps={props.deleteTodoProps}
            updateItem={props.updateItem}
          />
        ))}
      </ul>
    );
}

export default TodoList;
