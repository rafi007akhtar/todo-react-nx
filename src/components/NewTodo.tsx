import { useContext, useRef } from 'react';
import styles from './NewTodo.module.scss';
import { TodoItem } from '../models/todos';
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = function () {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredVal = todoTextInputRef.current?.value;

    if (!enteredVal?.trim()) {
      console.error('No value entered');
      return;
    }

    todosCtx.addTodoItem(new TodoItem(enteredVal));
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
