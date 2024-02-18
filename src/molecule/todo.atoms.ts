import { atom } from 'jotai';
import { TodoItem } from '../models/todos';

export const todosAtom = atom<TodoItem[]>([]);
