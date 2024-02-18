import React from 'react';
import styles from './Todos.module.scss';
import { TodoItems } from 'src/models/todos';
import Todo from './Todo';

const Todos: React.FC<TodoItems> = (props) => {
  return (
    <div className={styles['container']}>
      <ul>
        {props.items?.map(item => <Todo key={item.id} id={item.id} text={item.text} />)}
      </ul>
    </div>
  );
}

export default Todos;
