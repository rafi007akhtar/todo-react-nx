import { useRef } from 'react';
import styles from './NewTodo.module.scss';
import { TodoItem } from '../models/todos';
import { useAtom } from 'jotai';
import { todosAtom } from '../molecule/todo.atoms';

const NewTodo: React.FC = function () {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_todos, setTodos] = useAtom(todosAtom);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredVal = todoTextInputRef.current?.value;

    if (!enteredVal?.trim()) {
      console.error('No value entered');
      return;
    }

    setTodos((prevTodos) => prevTodos.concat(new TodoItem(enteredVal)));
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo text</label> <br />
      <input type="text" id="text" ref={todoTextInputRef} />
      <br />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
