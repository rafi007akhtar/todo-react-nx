import React from 'react';
import { TodoItem } from 'src/models/todos';
import styles from './Todo.module.scss';

export const Todo: React.FC<TodoItem> = function (props) {
  const onClickHandler = () => {
    if (props.onTodoClick) {
      props.onTodoClick(props.id);
    }
  };

  return (
    <li className={styles.item} onClick={onClickHandler}>
      {props.text}
    </li>
  );
};

export default Todo;
