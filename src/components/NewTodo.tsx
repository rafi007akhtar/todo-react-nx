import { useRef } from 'react';
import styles from './NewTodo.module.scss';
import { TodoItem, TodoAddFn } from '../models/todos';

const NewTodo: React.FC<TodoAddFn> = function (props) {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredVal = todoTextInputRef.current?.value;

    if (!enteredVal?.trim()) {
      console.error('No value entered');
      return;
    }

    props.onTodoAdd(new TodoItem(enteredVal));
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
