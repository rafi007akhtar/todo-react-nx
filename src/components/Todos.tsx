import React from 'react';
import styles from './Todos.module.scss';
import Todo from './Todo';
import { useAtom } from 'jotai';
import { todosAtom } from '../molecule/todo.atoms';

const Todos: React.FC = () => {
  const [todoItems, setTodoItems] = useAtom(todosAtom);

  function deleteTodo(id: number) {
    setTodoItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <ul className={styles['todos']}>
      {todoItems?.map((item) => (
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
