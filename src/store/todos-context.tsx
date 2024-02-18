/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';
import { BaseProps } from '../models/base-props';
import { TodoCtxObj, TodoItem } from '../models/todos';

export const TodosContext = React.createContext<TodoCtxObj>({
  items: [],
  addTodoItem: (item: TodoItem) => {},
  deleteTodoItem: (id: number) => {},
});

const TodosContextProvider: React.FC<BaseProps> = (props) => {
  const [todos, setTodos] = useState<TodoItem[]>([new TodoItem('test')]);

  const addNewLearningItem = (item: TodoItem) => {
    setTodos((prevItems) => prevItems.concat(item));
  };

  const deleteLearningItem = (itemId: number) => {
    setTodos((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const ctxVal: TodoCtxObj = {
    items: todos,
    addTodoItem: addNewLearningItem,
    deleteTodoItem: deleteLearningItem,
  };

  return (
    <TodosContext.Provider value={ctxVal}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
