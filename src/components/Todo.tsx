import React from 'react';
import { TodoItem } from 'src/models/todos';

export const Todo: React.FC<TodoItem> = function (props) {
  return <li>{props.text}</li>;
}

export default Todo;
