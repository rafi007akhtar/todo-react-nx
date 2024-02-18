// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Todos from '../components/Todos';
import { TodoItem } from '../models/todos';
import NewTodo from '../components/NewTodo';
import { useState } from 'react';

export function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addNewLearningItem = (item: TodoItem) => {
    setTodos((prevItems) => prevItems.concat(item));
  };

  const deleteLearningItem = (itemId: number) => {
    setTodos((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <NewTodo onTodoAdd={addNewLearningItem} />
      <Todos items={todos} onTodoClick={deleteLearningItem} />
    </div>
  );
}

export default App;
