// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Todos from '../components/Todos';
import NewTodo from '../components/NewTodo';

export function App() {
  return (
    <div>
      <NewTodo />
      <Todos />
    </div>
  );
}

export default App;
