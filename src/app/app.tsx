// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Todos from '../components/Todos';
import NewTodo from '../components/NewTodo';
import TodosContextProvider from '../store/todos-context';

export function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
