import React from 'react';
import styles from './Todos.module.scss';
import { TodoItems } from 'src/models/todos';
import Todo from './Todo';

const Todos: React.FC<TodoItems> = (props) => {
  const deleteTodo = (id: number) => {
    // console.log('delete');
    if (props.onTodoClick) {
      props.onTodoClick(id);
    }
  };
  return (
    <ul className={styles['todos']}>
      {props.items?.map((item) => (
        <Todo
          key={item.id}
          id={item.id}
          text={item.text}
          onTodoClick={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
