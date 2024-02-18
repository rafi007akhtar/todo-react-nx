/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import { BaseProps } from './base-props';

export class TodoItem implements BaseProps {
  children?: ReactNode;

  id: number;
  text: string;
  onTodoClick?: (id: number) => any;

  constructor(text: string) {
    this.id = Math.random();
    this.text = text;
  }
}

export interface TodoItems extends BaseProps {
  items: TodoItem[];
  onTodoClick?: (id: number) => any;
}

export interface TodoAddFn extends BaseProps {
  onTodoAdd: (todoItem: TodoItem) => void;
}

export interface TodoCtxObj {
  items: TodoItem[];
  addTodoItem: (item: TodoItem) => void;
  deleteTodoItem: (itemId: number) => void;
}
