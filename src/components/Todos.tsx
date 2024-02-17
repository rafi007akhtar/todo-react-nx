import React from 'react';
import styles from './Todos.module.scss';
import { TodoItems } from 'src/models/todos';

const Todos: React.FC<TodoItems> = (props) => {
  return (
    <div className={styles['container']}>
      <ul>
        {props.items?.map(item => <li key={item.id}>{item.text}</li>)}
      </ul>
    </div>
  );
}

export default Todos;
