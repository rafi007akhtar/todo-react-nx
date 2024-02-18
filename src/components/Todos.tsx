import React, { useContext } from 'react';
import styles from './Todos.module.scss';
import Todo from './Todo';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={styles['todos']}>
      {todosCtx.items?.map((item) => (
        <Todo
          key={item.id}
          id={item.id}
          text={item.text}
          onTodoClick={todosCtx.deleteTodoItem}
        />
      ))}
    </ul>
  );
};

export default Todos;
