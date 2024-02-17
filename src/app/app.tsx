// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Todos from '../components/Todos';
import {TodoItem} from '../models/todos';

export function App() {
  const learningItems: Array<TodoItem> = [
    new TodoItem('Learn ReactJS'),
    new TodoItem('Learn NX'),
    new TodoItem('Learn React Native')
  ];
  return (
    <div>
      <Todos items={learningItems}/>
    </div>
  );
}

export default App;
