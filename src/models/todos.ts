/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseProps } from './base-props';

export class TodoItem {
  id: number;
  text: string;

  constructor(text: string) {
    this.id = Math.random();
    this.text = text;
  }
}

export interface TodoItems extends BaseProps {
  items: TodoItem[];
}
